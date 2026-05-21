#!/usr/bin/env python3
"""
Walk through invite_tracker.csv contacts that still need an address.
For each: draft an SMS with the local LLM, show it, let you approve/edit/skip,
then open the Messages composer on your phone via ADB so you tap send.

Resumable: the CSV's "Texted?" column is updated to "Yes" after each send so
re-running the script picks up where you left off.
"""

import csv
import json
import os
import re
import subprocess
import sys
import tempfile
import termios
import time
import tty
import urllib.parse
import urllib.request
from pathlib import Path

HERE = Path(__file__).parent
CSV_PATH = HERE / "invite_tracker.csv"
INSTRUCTIONS_PATH = HERE / "llm_instructions.md"

LM_URL = "http://192.168.1.147:1234"
LM_MODEL = "qwen/qwen3.6-27b"
LM_API_KEY = "not-needed"


def normalize_phone(raw: str) -> str | None:
    """Convert any phone format to +1XXXXXXXXXX. Returns None if unparseable."""
    if not raw:
        return None
    first = raw.split("/")[0].strip()
    has_plus = first.startswith("+")
    digits = re.sub(r"\D", "", first)
    if has_plus:
        return "+" + digits
    if len(digits) == 10:
        return "+1" + digits
    if len(digits) == 11 and digits.startswith("1"):
        return "+" + digits
    return None


def load_instructions() -> str:
    return INSTRUCTIONS_PATH.read_text().strip()


def draft_message(first_name: str, last_known: str, notes: str, instructions: str) -> str:
    user_block = (
        f"First name: {first_name}\n"
        f"Last known location: {last_known or '(none)'}\n"
        f"Notes: {notes or '(none)'}"
    )
    # Disable Qwen3 "thinking" mode via the tokenizer chat template. The
    # canonical path is chat_template_kwargs.enable_thinking=False, which LM
    # Studio (>=0.3.x) forwards to tokenizer.apply_chat_template(). We also
    # send the flag at the top level and in `extra_body` to cover older builds
    # and SDK variants that look for it under different names. Unknown fields
    # are ignored by the OpenAI-compatible spec, so passing all three is safe.
    payload = {
        "model": LM_MODEL,
        "messages": [
            {"role": "system", "content": instructions},
            {"role": "user", "content": user_block},
        ],
        "temperature": 0.7,
        "max_tokens": 2500,
        "chat_template_kwargs": {"enable_thinking": False},
        "enable_thinking": False,
        "extra_body": {"enable_thinking": False},
    }
    req = urllib.request.Request(
        f"{LM_URL}/v1/chat/completions",
        data=json.dumps(payload).encode(),
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {LM_API_KEY}",
        },
    )
    with urllib.request.urlopen(req, timeout=120) as resp:
        data = json.load(resp)
    msg = data["choices"][0]["message"]
    raw = ((msg.get("content") or "") + "\n" + (msg.get("reasoning_content") or "")).strip()

    # Primary extraction: pull the SMS body out of <sms>...</sms> tags.
    tag_match = re.search(r"<sms>\s*(.*?)\s*</sms>", raw, flags=re.DOTALL | re.IGNORECASE)
    if tag_match:
        text = tag_match.group(1).strip()
    else:
        # Fallback: no tags found. Strip any <think>...</think> scaffolding
        # and hope what's left is the message. Last resort before erroring.
        text = re.sub(r"<think>.*?</think>", "", raw, flags=re.DOTALL).strip()
        text = re.sub(r"</?sms>", "", text, flags=re.IGNORECASE).strip()

    if not text:
        finish = data["choices"][0].get("finish_reason", "?")
        raise RuntimeError(
            f"LLM returned no usable message (finish_reason={finish}). "
            f"Raw response head: {raw[:200]!r}"
        )

    # Strip stray surrounding quotes the model sometimes adds
    if len(text) >= 2 and text[0] == text[-1] and text[0] in ("'", '"'):
        text = text[1:-1].strip()
    return text


def edit_in_editor(initial: str) -> str:
    editor = os.environ.get("EDITOR", "nano")
    with tempfile.NamedTemporaryFile(suffix=".txt", mode="w", delete=False) as f:
        f.write(initial)
        path = f.name
    try:
        subprocess.call([editor, path])
        return Path(path).read_text().strip()
    finally:
        os.unlink(path)


SEND_BUTTON_LABELS = ("Send message", "Send SMS", "Send")


def _ui_dump() -> str:
    """Grab the current UI hierarchy as XML."""
    subprocess.run(
        ["adb", "shell", "uiautomator", "dump", "/sdcard/ui.xml"],
        check=True, capture_output=True, timeout=10,
    )
    return subprocess.check_output(
        ["adb", "shell", "cat", "/sdcard/ui.xml"], timeout=10
    ).decode("utf-8", errors="replace")


def _find_send_button(xml: str) -> tuple[int, int] | None:
    """Return (x, y) center of a Send button if one is visible."""
    for label in SEND_BUTTON_LABELS:
        pattern = (
            r'content-desc="' + re.escape(label) + r'"'
            r'[^>]*?bounds="\[(\d+),(\d+)\]\[(\d+),(\d+)\]"'
        )
        m = re.search(pattern, xml)
        if m:
            x1, y1, x2, y2 = map(int, m.groups())
            return (x1 + x2) // 2, (y1 + y2) // 2
    return None


def send_via_adb(phone: str, body: str) -> None:
    """Open the SMS composer, locate the Send button on-screen, and tap it."""
    encoded = urllib.parse.quote(body, safe="")
    uri = f"sms:{phone}?body={encoded}"
    inner = f'am start -a android.intent.action.SENDTO -d "{uri}"'
    subprocess.run(["adb", "shell", inner], check=True)

    # Poll for the Send button — the composer can take a moment to render,
    # especially on a cold launch of the Messages app.
    coords = None
    for _ in range(10):
        time.sleep(0.4)
        try:
            xml = _ui_dump()
        except subprocess.SubprocessError:
            continue
        coords = _find_send_button(xml)
        if coords:
            break

    if not coords:
        raise RuntimeError(
            "Composer opened but Send button wasn't found on screen. "
            "Make sure the phone is unlocked and the Messages app has focus. "
            "Tap Send manually for this one — script will continue."
        )

    x, y = coords
    subprocess.run(["adb", "shell", "input", "tap", str(x), str(y)], check=True)
    time.sleep(0.5)  # let the send animation start before we move on


def write_csv(rows: list[dict], fieldnames: list[str]) -> None:
    tmp = CSV_PATH.with_suffix(".csv.tmp")
    with tmp.open("w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fieldnames)
        w.writeheader()
        w.writerows(rows)
    tmp.replace(CSV_PATH)


def prompt(label: str, valid: str) -> str:
    """Single-keypress prompt — fires on the first matching key, no Enter needed."""
    sys.stdout.write(label)
    sys.stdout.flush()
    # Fall back to line-based input if stdin isn't a real terminal (e.g. piped)
    if not sys.stdin.isatty():
        while True:
            line = sys.stdin.readline().strip().lower()
            if line and line[0] in valid:
                return line[0]
            sys.stdout.write(f"  please press one of: {', '.join(valid)}\n{label}")
            sys.stdout.flush()
    fd = sys.stdin.fileno()
    old = termios.tcgetattr(fd)
    try:
        tty.setcbreak(fd)
        while True:
            ch = sys.stdin.read(1)
            if ch in ("\x03", "\x04"):  # Ctrl-C, Ctrl-D
                raise KeyboardInterrupt
            low = ch.lower()
            if low in valid:
                sys.stdout.write(low + "\n")
                sys.stdout.flush()
                return low
    finally:
        termios.tcsetattr(fd, termios.TCSADRAIN, old)


def main() -> int:
    if not CSV_PATH.exists():
        print(f"ERROR: {CSV_PATH} not found", file=sys.stderr)
        return 1
    instructions = load_instructions()

    with CSV_PATH.open(newline="") as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames
        rows = list(reader)

    pending = [
        r for r in rows
        if r.get("Status", "").strip().lower() == "need address"
        and r.get("Texted?", "").strip().lower() != "yes"
    ]
    if not pending:
        print("Nothing left to text — all 'Need address' rows are already marked Texted.")
        return 0

    print(f"\n{len(pending)} contacts still need an address text.")
    print(f"LLM: {LM_MODEL} @ {LM_URL}")
    print(f"Instructions: {INSTRUCTIONS_PATH}")
    print("Per contact: [a]pprove & auto-send · [r]egenerate · [e]dit · [s]kip · [q]uit")
    print("(approval taps Send on your phone via ADB — make sure phone is unlocked)\n")

    sent_count = 0
    skipped_count = 0

    for idx, row in enumerate(pending, start=1):
        name = row["Name"].strip()
        first = name.split()[0] if name else ""
        phone_raw = row.get("Phone", "")
        phone = normalize_phone(phone_raw)
        last_known = row.get("Last Known Location", "").strip()
        notes = row.get("Notes", "").strip()

        print("─" * 72)
        print(f"[{idx}/{len(pending)}]  {name}")
        print(f"  phone:  {phone_raw}  →  {phone or 'UNPARSEABLE'}")
        if last_known:
            print(f"  last known: {last_known}")
        if notes:
            print(f"  notes: {notes}")

        if not phone:
            print("  → skipping (phone number unparseable)")
            skipped_count += 1
            continue

        try:
            draft = draft_message(first, last_known, notes, instructions)
        except Exception as e:
            print(f"  LLM call failed: {e}")
            choice = prompt("  [r]etry / [s]kip / [q]uit: ", "rsq")
            if choice == "q":
                break
            if choice == "s":
                skipped_count += 1
                continue
            # retry once
            try:
                draft = draft_message(first, last_known, notes, instructions)
            except Exception as e2:
                print(f"  Retry also failed: {e2}. Skipping.")
                skipped_count += 1
                continue

        while True:
            print(f"\n  draft ({len(draft)} chars):")
            print("  " + "\n  ".join(draft.splitlines()))
            choice = prompt("\n  [a]pprove / [r]egenerate / [e]dit / [s]kip / [q]uit: ", "aresq")

            if choice == "a":
                try:
                    send_via_adb(phone, draft)
                except subprocess.CalledProcessError as e:
                    print(f"  ADB send failed: {e}")
                    sub = prompt("  [r]etry / [s]kip / [q]uit: ", "rsq")
                    if sub == "q":
                        return 0
                    if sub == "s":
                        skipped_count += 1
                        break
                    continue
                row["Texted?"] = "Yes"
                row["Notes"] = (notes + (" | " if notes else "") + f"sent: {draft}").strip()
                write_csv(rows, fieldnames)
                sent_count += 1
                print(f"  ✓ sent to {phone}")
                break
            elif choice == "r":
                try:
                    draft = draft_message(first, last_known, notes, instructions)
                except Exception as e:
                    print(f"  LLM call failed: {e}")
                    continue
            elif choice == "e":
                draft = edit_in_editor(draft)
            elif choice == "s":
                skipped_count += 1
                break
            elif choice == "q":
                print(f"\nstopping. {sent_count} sent, {skipped_count} skipped this session.")
                return 0

    print("─" * 72)
    print(f"done. {sent_count} sent, {skipped_count} skipped this session.")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        print("\ninterrupted.")
        sys.exit(130)

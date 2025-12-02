document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Check if user is already authenticated for Greece
    const athensAuth = localStorage.getItem('athensAuthenticated') === 'true';

    // If already authenticated for Greece, show the Greece card
    if (athensAuth) {
        showGreeceCard();
    }

    // Invitation code validation for Greece
    const codeSubmitBtn = document.getElementById('code-submit');
    const codeInput = document.getElementById('invitation-code');
    const codeErrorElement = document.getElementById('code-error');

    if (codeSubmitBtn) {
        codeSubmitBtn.addEventListener('click', function () {
            const enteredCode = codeInput.value.trim().toUpperCase();

            if (enteredCode === 'GR26') {
                // Code for Greece - redirect to Athens page
                localStorage.setItem('athensAuthenticated', 'true');
                window.location.href = 'athens.html';
            } else {
                // Invalid code
                codeErrorElement.textContent = 'Invalid code. Please try again or contact the couple for assistance.';
                codeInput.focus();
            }
        });
    }

    // Handle Enter key press in code input
    if (codeInput) {
        codeInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                codeSubmitBtn.click();
            }
        });
    }

    // Function to show Greece card
    function showGreeceCard() {
        const greeceCard = document.getElementById('greece-card');
        const codeArea = document.getElementById('greece-code-area');

        if (greeceCard) {
            greeceCard.style.display = 'block';
        }

        // Hide the code input area
        if (codeArea) {
            codeArea.style.display = 'none';
        }
    }

    // Add animations when elements come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });

    // Observe all section titles and cards
    document.querySelectorAll('.section h2, .image-frame, .location-card').forEach(item => {
        observer.observe(item);
    });
});
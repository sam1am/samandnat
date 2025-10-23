let colors = [];
let expandedIndex = null;
let backgroundImage = '';
let backgroundColor = '';
let backgroundOpacity = 100;
let backgroundType = 'color'; // 'color' or 'image'

// Initialize
function init() {
    loadFromUrl();
    if (colors.length === 0) {
        // Add default colors
        colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];
    }
    render();
    updateShareUrl();
}

// Add a new color
function addColor(color = '#' + Math.floor(Math.random() * 16777215).toString(16)) {
    colors.push(color);
    render();
    updateUrl();
}

// Remove a color
function removeColor(index) {
    if (confirm('Remove this color?')) {
        colors.splice(index, 1);
        if (expandedIndex === index) {
            expandedIndex = null;
        } else if (expandedIndex > index) {
            expandedIndex--;
        }
        render();
        updateUrl();
    }
}

// Update color
function updateColor(index, color) {
    // Validate hex color
    if (/^#[0-9A-F]{6}$/i.test(color)) {
        colors[index] = color;
        render();
        updateUrl();
    }
}

// Toggle color detail expansion
function toggleColorDetail(index) {
    expandedIndex = expandedIndex === index ? null : index;
    render();
}

// Convert hex to RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Convert hex to HSL
function hexToHsl(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return null;

    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }

    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showCopyIndicator();
    });
}

// Show copy indicator
function showCopyIndicator() {
    const indicator = document.getElementById('copyIndicator');
    indicator.classList.add('show');
    setTimeout(() => {
        indicator.classList.remove('show');
    }, 2000);
}

// Generate random palette
function generateRandomPalette() {
    colors = [];
    const numColors = 4 + Math.floor(Math.random() * 3); // 4-6 colors
    for (let i = 0; i < numColors; i++) {
        addColor();
    }
}

// Clear all colors
function clearAll() {
    if (confirm('Are you sure you want to clear all colors?')) {
        colors = [];
        expandedIndex = null;
        render();
        updateUrl();
    }
}

// Toggle background settings
function toggleBackgroundSettings() {
    const settings = document.getElementById('backgroundSettings');
    settings.classList.toggle('show');
}

// Switch background type
function switchBackgroundType(type) {
    backgroundType = type;
    const colorSetting = document.getElementById('colorSetting');
    const imageSetting = document.getElementById('imageSetting');
    const colorTypeBtn = document.getElementById('colorTypeBtn');
    const imageTypeBtn = document.getElementById('imageTypeBtn');

    if (type === 'color') {
        colorSetting.style.display = 'block';
        imageSetting.style.display = 'none';
        colorTypeBtn.classList.add('active');
        imageTypeBtn.classList.remove('active');
    } else {
        colorSetting.style.display = 'none';
        imageSetting.style.display = 'block';
        colorTypeBtn.classList.remove('active');
        imageTypeBtn.classList.add('active');
    }
}

// Apply background color (called by OK button)
function applyBackgroundColor() {
    const colorInput = document.getElementById('backgroundColor');
    const colorTextInput = document.getElementById('backgroundColorText');

    // Use text input value if it's a valid hex color, otherwise use color picker value
    let color = colorTextInput.value.trim();
    if (!color.startsWith('#')) {
        color = '#' + color;
    }

    if (/^#[0-9A-F]{6}$/i.test(color)) {
        updateBackgroundColor(color);
    } else {
        updateBackgroundColor(colorInput.value);
    }
}

// Apply background image (called by OK button)
function applyBackgroundImage() {
    const urlInput = document.getElementById('backgroundUrl');
    updateBackgroundImage(urlInput.value.trim());
}

// Update background color
function updateBackgroundColor(color) {
    backgroundColor = color;
    backgroundImage = ''; // Clear image when setting color
    const overlay = document.getElementById('backgroundOverlay');
    const colorInput = document.getElementById('backgroundColor');
    const colorTextInput = document.getElementById('backgroundColorText');

    // Validate and normalize color
    if (color.startsWith('#')) {
        colorInput.value = color;
        colorTextInput.value = color;
    }

    overlay.style.backgroundImage = 'none';
    overlay.style.backgroundColor = color;
    updateUrl();
}

// Update background image
function updateBackgroundImage(url) {
    backgroundImage = url;
    backgroundColor = ''; // Clear color when setting image
    const overlay = document.getElementById('backgroundOverlay');
    if (url) {
        overlay.style.backgroundImage = `url(${url})`;
        overlay.style.backgroundColor = 'transparent';
    } else {
        overlay.style.backgroundImage = 'none';
    }
    updateUrl();
}

// Update background opacity
function updateBackgroundOpacity(value) {
    backgroundOpacity = value;
    const overlay = document.getElementById('backgroundOverlay');
    overlay.style.opacity = value / 100;
    document.getElementById('opacityValue').textContent = value + '%';
    updateUrl();
}

// Clear background
function clearBackground() {
    if (backgroundType === 'color') {
        backgroundColor = '#f5f5f5';
        document.getElementById('backgroundColor').value = '#f5f5f5';
        document.getElementById('backgroundColorText').value = '#f5f5f5';
        updateBackgroundColor('#f5f5f5');
    } else {
        document.getElementById('backgroundUrl').value = '';
        updateBackgroundImage('');
    }
}

// Update URL with current colors
function updateUrl() {
    const params = new URLSearchParams();

    if (colors.length > 0) {
        params.set('colors', colors.map(c => c.replace('#', '')).join(','));
    }

    if (backgroundImage) {
        params.set('bg', encodeURIComponent(backgroundImage));
    }

    if (backgroundColor && backgroundColor !== '#f5f5f5') {
        params.set('bgColor', backgroundColor.replace('#', ''));
    }

    if (backgroundOpacity !== 100) {
        params.set('opacity', backgroundOpacity);
    }

    const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
    window.history.replaceState({}, '', newUrl);
    updateShareUrl();
}

// Load colors from URL
function loadFromUrl() {
    const params = new URLSearchParams(window.location.search);

    const colorParams = params.get('colors');
    if (colorParams) {
        colors = colorParams.split(',').map(c => '#' + c);
    }

    const bgParam = params.get('bg');
    const bgColorParam = params.get('bgColor');

    if (bgParam) {
        backgroundType = 'image';
        backgroundImage = decodeURIComponent(bgParam);
        document.getElementById('backgroundUrl').value = backgroundImage;
        updateBackgroundImage(backgroundImage);
        switchBackgroundType('image');
    } else if (bgColorParam) {
        backgroundType = 'color';
        backgroundColor = '#' + bgColorParam;
        document.getElementById('backgroundColor').value = backgroundColor;
        document.getElementById('backgroundColorText').value = backgroundColor;
        updateBackgroundColor(backgroundColor);
        switchBackgroundType('color');
    } else {
        // Default to color type with default color
        backgroundColor = '#f5f5f5';
        const overlay = document.getElementById('backgroundOverlay');
        overlay.style.backgroundColor = backgroundColor;
    }

    const opacityParam = params.get('opacity');
    if (opacityParam) {
        backgroundOpacity = parseInt(opacityParam);
        document.getElementById('backgroundOpacity').value = backgroundOpacity;
        updateBackgroundOpacity(backgroundOpacity);
    }
}

// Update share URL input
function updateShareUrl() {
    document.getElementById('shareUrl').value = window.location.href;
}

// Copy share URL
function copyShareUrl() {
    const input = document.getElementById('shareUrl');
    input.select();
    copyToClipboard(input.value);
}

// Render the UI
function render() {
    renderColors();
}

// Render color strip with integrated details
function renderColors() {
    const container = document.getElementById('colorsContainer');

    if (colors.length === 0) {
        container.innerHTML = `
            <div class="colors-strip">
                <div class="empty-state" style="width: 100%; display: flex; align-items: center; justify-content: center;">
                    <div>
                        <h2>No colors yet!</h2>
                        <p>Click "Add Color" to start creating your palette</p>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="colors-strip" id="colorsStrip">
            ${colors.map((color, index) => {
                const rgb = hexToRgb(color);
                const hsl = hexToHsl(color);
                const isExpanded = expandedIndex === index;

                return `
                    <div class="color-wrapper ${isExpanded ? 'expanded' : ''}">
                        <div class="color-bar ${isExpanded ? 'active' : ''}"
                             style="background-color: ${color}"
                             draggable="true"
                             data-index="${index}"
                             ondragstart="handleDragStart(event, ${index})"
                             ondragover="handleDragOver(event)"
                             ondragenter="handleDragEnter(event, ${index})"
                             ondragleave="handleDragLeave(event)"
                             ondrop="handleDrop(event, ${index})"
                             ondragend="handleDragEnd(event)"
                             onclick="toggleColorDetail(${index})">
                            <div class="color-picker-floating">
                                <input type="color" value="${color}"
                                    onclick="event.stopPropagation()"
                                    onchange="updateColor(${index}, this.value)">
                            </div>
                            <div class="color-label">${color}</div>
                            <div class="drag-handle">⋮⋮</div>
                        </div>
                        <div class="color-detail-dropdown ${isExpanded ? 'show' : ''}">
                            <div class="detail-body">
                                <div class="color-input-group">
                                    <label>Hex Color</label>
                                    <input type="text" value="${color}"
                                        onchange="updateColor(${index}, this.value)"
                                        placeholder="#000000">
                                </div>
                                <div class="color-values">
                                    <div class="value-row" onclick="copyToClipboard('${color}')">
                                        <span class="value-label">HEX</span>
                                        <span class="value-text">${color}</span>
                                    </div>
                                    <div class="value-row" onclick="copyToClipboard('rgb(${rgb.r}, ${rgb.g}, ${rgb.b})')">
                                        <span class="value-label">RGB</span>
                                        <span class="value-text">rgb(${rgb.r}, ${rgb.g}, ${rgb.b})</span>
                                    </div>
                                    <div class="value-row" onclick="copyToClipboard('${rgb.r}, ${rgb.g}, ${rgb.b}')">
                                        <span class="value-label">RGB (no prefix)</span>
                                        <span class="value-text">${rgb.r}, ${rgb.g}, ${rgb.b}</span>
                                    </div>
                                    <div class="value-row" onclick="copyToClipboard('hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)')">
                                        <span class="value-label">HSL</span>
                                        <span class="value-text">hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)</span>
                                    </div>
                                    <div class="value-row" onclick="copyToClipboard('${hsl.h}, ${hsl.s}%, ${hsl.l}%')">
                                        <span class="value-label">HSL (no prefix)</span>
                                        <span class="value-text">${hsl.h}, ${hsl.s}%, ${hsl.l}%</span>
                                    </div>
                                </div>
                                <button class="remove-btn" onclick="event.stopPropagation(); removeColor(${index})">
                                    Remove Color
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

// Drag and drop functionality
let draggedIndex = null;

function handleDragStart(event, index) {
    draggedIndex = index;
    event.currentTarget.classList.add('dragging');
    event.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    event.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragEnter(event, index) {
    if (draggedIndex !== index) {
        event.currentTarget.classList.add('drag-over');
    }
}

function handleDragLeave(event) {
    event.currentTarget.classList.remove('drag-over');
}

function handleDrop(event, dropIndex) {
    if (event.stopPropagation) {
        event.stopPropagation();
    }
    event.preventDefault();

    event.currentTarget.classList.remove('drag-over');

    if (draggedIndex !== dropIndex && draggedIndex !== null) {
        // Reorder the colors array
        const draggedColor = colors[draggedIndex];
        colors.splice(draggedIndex, 1);
        colors.splice(dropIndex, 0, draggedColor);

        // Adjust expandedIndex if needed
        if (expandedIndex === draggedIndex) {
            expandedIndex = dropIndex;
        } else if (draggedIndex < expandedIndex && dropIndex >= expandedIndex) {
            expandedIndex--;
        } else if (draggedIndex > expandedIndex && dropIndex <= expandedIndex) {
            expandedIndex++;
        }

        render();
        updateUrl();
    }

    return false;
}

function handleDragEnd(event) {
    event.currentTarget.classList.remove('dragging');
    // Remove all drag-over classes
    document.querySelectorAll('.color-bar').forEach(bar => {
        bar.classList.remove('drag-over');
    });
    draggedIndex = null;
}


// Initialize on load
init();
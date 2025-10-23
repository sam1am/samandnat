document.addEventListener('DOMContentLoaded', function () {
    // Clear previous authentication (TEMPORARY FOR TESTING)
    localStorage.removeItem('athensAuthenticated');
    localStorage.removeItem('slcAuthenticated');

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

    // Check if user is already authenticated
    const athensAuth = localStorage.getItem('athensAuthenticated') === 'true';
    const slcAuth = localStorage.getItem('slcAuthenticated') === 'true';

    // If already authenticated, show the appropriate location cards
    if (athensAuth || slcAuth) {
        showLocationCards(athensAuth, slcAuth);
    }

    // Invitation code validation
    const codeSubmitBtn = document.getElementById('code-submit');
    const codeInput = document.getElementById('invitation-code');
    const codeErrorElement = document.getElementById('code-error');

    if (codeSubmitBtn) {
        codeSubmitBtn.addEventListener('click', function () {
            const enteredCode = codeInput.value.trim().toUpperCase();

            if (enteredCode === 'GR26') {
                // Code for both Athens and SLC
                localStorage.setItem('athensAuthenticated', 'true');
                localStorage.setItem('slcAuthenticated', 'true');
                showLocationCards(true, true);
                codeErrorElement.textContent = '';
            } else if (enteredCode === 'SL26') {
                // Code for SLC only
                localStorage.setItem('slcAuthenticated', 'true');
                localStorage.setItem('athensAuthenticated', 'false');
                showLocationCards(false, true);
                codeErrorElement.textContent = '';
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

    // Function to show location cards based on authentication
    function showLocationCards(showAthens, showSLC) {
        const locationsContainer = document.getElementById('locations-container');
        if (!locationsContainer) return; // Safety check

        locationsContainer.innerHTML = ''; 
        locationsContainer.className = 'location-cards show-section';


        if (showAthens) {
            // Add Athens card
            const athensCard = document.createElement('div');
            athensCard.className = 'location-card';
            athensCard.innerHTML = `
                <img src="./images/villa9.avif" alt="Villa Delenia, Greece" class="location-image">
                <div class="location-content">
                    <h3>Greece Ceremony</h3>
                    <p>April 7, 2026</p>
                    <p>Villa Delenia, Styra, Greece</p>
                    <div class="location-access">
                        <a href="athens.html" class="btn location-btn">View Details</a>
                    </div>
                </div>
            `;
            locationsContainer.appendChild(athensCard);
        }

        if (showSLC) {
            // Add SLC card
            const slcCard = document.createElement('div');
            slcCard.className = 'location-card';
            slcCard.innerHTML = `
                <img src="./images/spruces1.jpg" alt="The Spruces, Utah" class="location-image">
                <div class="location-content">
                    <h3>Utah Ceremony</h3>
                    <p>July 2026</p>
                    <p>The Spruces Campground, Big Cottonwood Canyon</p>
                    <div class="location-access">
                        <a href="slc.html" class="btn location-btn">View Details</a>
                    </div>
                </div>
            `;
            locationsContainer.appendChild(slcCard);
        }

        // Show the container
        locationsContainer.classList.remove('hidden-section');
        locationsContainer.classList.add('show-section');

        // Update the intro text
        const locationsIntro = document.querySelector('.locations-intro');
        if (locationsIntro) {
            if (showAthens && showSLC) {
                locationsIntro.textContent = "We're celebrating our marriage with two ceremonies - one in Greece and one in Utah. Please join us for one or both!";
            } else if (showSLC) {
                locationsIntro.textContent = "We're celebrating our marriage with a beautiful ceremony in Utah. We'd be honored to have you join us!";
            }
        }

        // Hide the code input area
        const codeArea = document.querySelector('.invitation-code-area');
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
Project Root: /Users/johngarfield/Documents/GitHub/samandnat
Project Structure:
```
.
|-- athens.html
|-- athens.js
|-- favicon.ico
|-- images
    |-- spruces1.jpg
    |-- spruces2.jpg
    |-- spruces3.webp
    |-- villa1.avif
    |-- villa2.avif
    |-- villa3.avif
    |-- villa4.avif
    |-- villa5.avif
    |-- villa6.avif
    |-- villa7.avif
    |-- villa8.avif
    |-- villa9.avif
|-- index.html
|-- script.js
|-- slc.html
|-- slc.js
|-- styles.css

```

---
## File: athens.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sam & Natalie - Greece Wedding</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Great+Vibes&family=Montserrat:wght@300;400;500&display=swap"
        rel="stylesheet">
</head>

<body>
    <div class="hero athens-hero">
        <div class="overlay"></div>
        <div class="hero-content">
            <h2 class="save-date">Greece Wedding</h2>
            <div class="flourish">
                <svg width="100" height="20">
                    <path d="M 0,10 C 30,5 70,15 100,10" stroke="var(--gold)" fill="none" stroke-width="1" />
                </svg>      
            </div>
            <h1 class="names">Sam & Natalie</h1>
            <div class="flourish">
                <svg width="100" height="20">
                    <path d="M 0,10 C 30,5 70,15 100,10" stroke="var(--gold)" fill="none" stroke-width="1" />
                </svg>
            </div>
            <p class="date">April 7, 2026</p>
            <p class="location">Villa Delenia, Styra, Greece</p>
            <div class="countdown">
                <div class="countdown-item">
                    <span id="days">000</span>
                    <span class="label">Days</span>
                </div>
                <div class="countdown-item">
                    <span id="hours">00</span>
                    <span class="label">Hours</span>
                </div>
                <div class="countdown-item">
                    <span id="minutes">00</span>
                    <span class="label">Minutes</span>
                </div>
                <div class="countdown-item">
                    <span id="seconds">00</span>
                    <span class="label">Seconds</span>
                </div>
            </div>
        </div>
    </div>

    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="#details">Details</a></li>
            <li><a href="#venue">Venue</a></li>
            <li><a href="#athens">Athens</a></li>
            <li><a href="#travel">Travel</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#gallery">Gallery</a></li>
        </ul>
    </nav>

    <section id="details" class="section">
        <div class="container">
            <h2>Wedding Details</h2>
            <div class="decorative-line"></div>
            <div class="cards">
                <div class="card">
                    <div class="card-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24">
                            <path
                                d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"
                                fill="#7d9b76" />
                        </svg>
                    </div>
                    <h3>Ceremony</h3>
                    <p>April 7, 2026</p>
                    <p>4:00 PM</p>
                    <p>Villa Delenia, Styra</p>
                </div>
                <div class="card">
                    <div class="card-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24">
                            <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"
                                fill="#7d9b76" />
                        </svg>
                    </div>
                    <h3>Villa Stay</h3>
                    <p>April 5-9, 2026</p>
                    <p>Villa Delenia</p>
                    <p>Elaiochori, Nea Stira</p>
                </div>
                <div class="card">
                    <div class="card-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24">
                            <path
                                d="M19,9H5V8H19M19,12H5V11H19M19,15H5V14H19M3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6A2,2 0 0,0 19,4H5A2,2 0 0,0 3,6Z"
                                fill="#7d9b76" />
                        </svg>
                    </div>
                    <h3>Athens Events</h3>
                    <p>April 3-4, 2026</p>
                    <p>Welcome Gathering</p>
                    <p>Athens Exploration</p>
                </div>
            </div>
        </div>
    </section>

    <section id="venue" class="section">
        <div class="container">
            <h2>The Venue</h2>
            <div class="decorative-line"></div>
            <div class="venue-description">
                <p>We're excited to celebrate our special day at the stunning Villa Delenia in Styra, Greece. This
                    beautiful seaside villa will be our home for the wedding celebration from April 5-9, 2026.</p>
            </div>
            <div class="gallery">
                <div class="gallery-item">
                    <img src="./images/villa2.avif" alt="Villa Delenia">
                </div>
                <div class="gallery-item">
                    <img src="./images/villa3.avif" alt="Villa Delenia">
                </div>
                <div class="gallery-item">
                    <img src="./images/villa4.avif" alt="Villa Delenia">
                </div>
            </div>
            <div class="venue-map">
                <h3>Location</h3>
                <p>Villa Delenia, Elaiochori, Nea Stira 340 15, Greece</p>
                <div class="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.5514669041705!2d24.29282511532453!3d37.99724797971855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1f6fde38cc671%3A0xae4a1d138c257818!2sVilla%20Delenia!5e0!3m2!1sen!2sus!4v1651235689152!5m2!1sen!2sus"
                        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>

    <section id="athens" class="section">
        <div class="container">
            <h2>Athens Information</h2>
            <div class="decorative-line"></div>
            <div class="content-wrapper">
                <div class="text-content">
                    <h3>Welcome Gathering</h3>
                    <p>Join us for a casual welcome dinner in Athens on April 3rd, 2026 at 7:00 PM.</p>
                    <p>Location: Rooftop Restaurant, Central Athens Hotel</p>

                    <h3>Suggested Hotels</h3>
                    <ul>
                        <li>Athens Gate Hotel</li>
                        <li>Herodion Hotel</li>
                        <li>Electra Palace Athens</li>
                    </ul>
                </div>
                <div class="image-frame">
                    <img src="./images/villa5.avif" alt="Athens" class="story-image">
                </div>
            </div>

            <div class="athens-day">
                <h3>Athens Day Activities</h3>
                <p>On April 4th, we recommend visiting the Acropolis in the morning followed by exploring the Plaka
                    neighborhood. We'll meet as a group for lunch at 1:00 PM at a traditional Greek taverna.</p>

                <div class="cards athens-activities">
                    <div class="card">
                        <h4>Morning</h4>
                        <p>Acropolis & Museum</p>
                        <p>9:00 AM - 12:00 PM</p>
                    </div>
                    <div class="card">
                        <h4>Afternoon</h4>
                        <p>Group Lunch & Plaka</p>
                        <p>1:00 PM - 4:00 PM</p>
                    </div>
                    <div class="card">
                        <h4>Evening</h4>
                        <p>Free Time & Dinner</p>
                        <p>Individual Plans</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="travel" class="section">
        <div class="container">
            <h2>Travel Information</h2>
            <div class="decorative-line"></div>
            <div class="travel-info">
                <div class="travel-card">
                    <h3>Flights</h3>
                    <p>Plan to arrive in Athens by April 3rd, 2026 for the welcome gathering, or by April 5th, 2026 at
                        the latest for the villa stay.</p>
                    <a href="https://www.google.com/travel/flights?q=Flights%20to%20Athens%20April%202026"
                        target="_blank" class="btn flight-btn">Search Flights to Athens</a>
                </div>
                <div class="travel-card">
                    <h3>Transportation to Villa</h3>
                    <p>On April 5th, we'll provide transportation from Athens to Villa Delenia. The bus will depart from
                        Central Athens Hotel at 10:00 AM. The journey takes approximately 2.5 hours.</p>
                </div>
            </div>

            <div class="packing-tips">
                <h3>Packing Tips</h3>
                <p>April in Greece can be mild to warm during the day (60-70°F) and cooler in the evenings (50-60°F). We
                    recommend bringing:</p>
                <ul>
                    <li>Layers for varying temperatures</li>
                    <li>Comfortable walking shoes for Athens</li>
                    <li>Formal attire for the wedding ceremony</li>
                    <li>Swimwear (the villa has a pool)</li>
                    <li>Sunscreen and sunglasses</li>
                </ul>
            </div>
        </div>
    </section>

    <section id="schedule" class="section">
        <div class="container">
            <h2>Complete Schedule</h2>
            <div class="decorative-line"></div>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">April 3</div>
                    <div class="timeline-content">
                        <h3>Welcome to Athens</h3>
                        <p>7:00 PM: Welcome dinner at Rooftop Restaurant, Central Athens Hotel</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">April 4</div>
                    <div class="timeline-content">
                        <h3>Athens Day</h3>
                        <p>9:00 AM - 12:00 PM: Acropolis & Museum visit</p>
                        <p>1:00 PM: Group lunch at traditional taverna</p>
                        <p>Afternoon: Explore Plaka neighborhood</p>
                        <p>Evening: Free time</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">April 5</div>
                    <div class="timeline-content">
                        <h3>Travel to Villa Delenia</h3>
                        <p>10:00 AM: Bus departure from Central Athens Hotel</p>
                        <p>1:00 PM: Arrival at Villa Delenia</p>
                        <p>2:00 PM: Welcome lunch</p>
                        <p>Afternoon: Settle in and explore the villa</p>
                        <p>7:00 PM: Dinner</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">April 6</div>
                    <div class="timeline-content">
                        <h3>Pre-Wedding Day</h3>
                        <p>Morning: Breakfast and free time</p>
                        <p>12:00 PM: Optional excursion to nearby beach</p>
                        <p>7:00 PM: Rehearsal dinner</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">April 7</div>
                    <div class="timeline-content">
                        <h3>Wedding Day</h3>
                        <p>Morning: Breakfast and relaxation</p>
                        <p>4:00 PM: Wedding ceremony</p>
                        <p>5:00 PM: Cocktail hour</p>
                        <p>6:30 PM: Dinner reception</p>
                        <p>8:00 PM: Dancing and celebrations</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">April 8</div>
                    <div class="timeline-content">
                        <h3>Recovery Day</h3>
                        <p>Late breakfast</p>
                        <p>Day of relaxation at the villa</p>
                        <p>7:00 PM: Farewell dinner</p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">April 9</div>
                    <div class="timeline-content">
                        <h3>Departure</h3>
                        <p>Breakfast</p>
                        <p>11:00 AM: Bus departure to Athens</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="gallery" class="section">
        <div class="container">
            <h2>Gallery</h2>
            <div class="decorative-line"></div>
            <div class="photo-gallery">
                <div class="gallery-item large">
                    <img src="./images/villa6.avif" alt="Villa Delenia">
                </div>
                <div class="gallery-item">
                    <img src="./images/villa7.avif" alt="Villa Delenia">
                </div>
                <div class="gallery-item">
                    <img src="./images/villa8.avif" alt="Villa Delenia">
                </div>
                <div class="gallery-item">
                    <img src="./images/villa9.avif" alt="Villa Delenia">
                </div>
                <div class="gallery-item">
                    <img src="./images/villa1.avif" alt="Villa Delenia">
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="footer-content">
            <div class="footer-names">Sam & Natalie</div>
            <div class="footer-date">04.07.2026</div>
            <div class="footer-location">Villa Delenia, Styra, Greece</div>
            <div class="back-home"><a href="index.html">Back to Main Page</a></div>
        </div>
    </footer>

    <script src="athens.js"></script>
</body>

</html>
```
---
## File: athens.js

```js
document.addEventListener('DOMContentLoaded', function () {
    // Check if user is authenticated
    if (localStorage.getItem('athensAuthenticated') !== 'true') {
        // Not authenticated, redirect back to the main page
        window.location.href = 'index.html';
    }

    // Set the wedding date for countdown
    const weddingDate = new Date('April 7, 2026 16:00:00').getTime();

    // Update the countdown every second
    const countdown = setInterval(function () {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById('days').innerHTML = days.toString().padStart(3, '0');
        document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');

        // If the countdown is over
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('days').innerHTML = "000";
            document.getElementById('hours').innerHTML = "00";
            document.getElementById('minutes').innerHTML = "00";
            document.getElementById('seconds').innerHTML = "00";
        }
    }, 1000);

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

    // Add animations when elements come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });

    // Observe all section titles, cards and timeline items
    document.querySelectorAll('.section h2, .card, .gallery-item, .timeline-item').forEach(item => {
        observer.observe(item);
    });
});
```
---
## File: index.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sam & Natalie - Wedding Invitation</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Great+Vibes&family=Montserrat:wght@300;400;500&display=swap"
        rel="stylesheet">
</head>

<body>
    <div class="hero">
        <div class="overlay"></div>
        <div class="hero-content">
            <h2 class="save-date">We're Getting Married</h2>
            <div class="flourish">
                <svg width="100" height="20">
                    <path d="M 0,10 C 30,5 70,15 100,10" stroke="var(--gold)" fill="none" stroke-width="1" />
                </svg>      
            </div>
            <h1 class="names">Sam & Natalie</h1>
            <div class="flourish">
                <svg width="100" height="20">
                    <path d="M 0,10 C 30,5 70,15 100,10" stroke="var(--gold)" fill="none" stroke-width="1" />
                </svg>      
            </div>
            <p class="date">Summer 2026</p>  </div>
    </div>

    <nav>
        <ul>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#locations">Ceremonies</a></li>
        </ul>
    </nav>

    <section id="story" class="section">
        <div class="container">
            <h2>Our Story</h2>
            <div class="decorative-line"></div>
            <div class="content-wrapper">
                <div class="image-frame">
                    <img src="./images/villa1.avif" alt="Sam and Natalie" class="story-image">
                </div>
                <div class="text-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio at eros tincidunt
                        rhoncus. Praesent in lectus ut enim facilisis facilisis. Curabitur vel ipsum vel leo faucibus
                        facilisis.</p>
                    <p>Sed tempor nibh vel turpis vestibulum, nec elementum magna egestas. Donec eget justo ac tortor
                        sagittis pulvinar. Nulla facilisi. Cras feugiat, nibh eget efficitur eleifend.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="locations" class="section">
        <div class="container">
            <h2>Ceremony Information</h2>
            <div class="decorative-line"></div>
            <p class="locations-intro">We're celebrating our marriage in 2026. Please enter your invitation code to view
                details.</p>
    
            <div class="invitation-code-area">
                <div class="code-input-container">
                    <input type="text" id="invitation-code" placeholder="Enter your invitation code">
                    <button id="code-submit" class="btn">Submit</button>
                </div>
                <p id="code-error" class="error-message"></p>
            </div>
    
            <div class="location-cards hidden-section" id="locations-container">
                <!-- Cards will appear here after code entry -->
            </div>
        </div>
        </section>

    <footer>
        <div class="footer-content">
            <div class="footer-names">Sam & Natalie</div>
            <div class="footer-date">Summer 2026</div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>

</html>
```
---
## File: script.js

```js
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

        locationsContainer.innerHTML = ''; // Clear existing content

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
```
---
## File: slc.html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sam & Natalie - Utah Wedding</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Great+Vibes&family=Montserrat:wght@300;400;500&display=swap"
        rel="stylesheet">
</head>

<body>
    <div class="hero slc-hero">
        <div class="overlay"></div>
        <div class="hero-content">
            <h2 class="save-date">Utah Celebration</h2>
            <div class="flourish">
                <svg width="100" height="20">
                    <path d="M 0,10 C 30,5 70,15 100,10" stroke="var(--gold)" fill="none" stroke-width="1" />
                </svg>
            </div>
            <h1 class="names">Sam & Natalie</h1>
            <div class="flourish">
                <svg width="100" height="20">
                    <path d="M 0,10 C 30,5 70,15 100,10" stroke="var(--gold)" fill="none" stroke-width="1" />
                </svg>
            </div>
            <p class="date">July 2026</p>
            <p class="location">The Spruces Campground, Utah</p>
            <div class="countdown">
                <div class="countdown-item">
                    <span id="days">000</span>
                    <span class="label">Days</span>
                </div>
                <div class="countdown-item">
                    <span id="hours">00</span>
                    <span class="label">Hours</span>
                </div>
                <div class="countdown-item">
                    <span id="minutes">00</span>
                    <span class="label">Minutes</span>
                </div>
                <div class="countdown-item">
                    <span id="seconds">00</span>
                    <span class="label">Seconds</span>
                </div>
            </div>
        </div>
    </div>

    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="#venue">Venue</a></li>
            <li><a href="#ceremony">Ceremony</a></li>
            <li><a href="#accommodations">Accommodations</a></li>
            <li><a href="#things-to-do">Things to Do</a></li>
        </ul>
    </nav>

    <section id="venue" class="section">
        <div class="container">
            <h2>The Venue</h2>
            <div class="decorative-line"></div>
            <div class="venue-description">
                <p>Our Utah celebration will take place at the beautiful Spruces Campground in Big Cottonwood Canyon,
                    surrounded by stunning mountain scenery and fresh alpine air.</p>
            </div>
            <div class="gallery">
                <div class="gallery-item">
                    <img src="./images/spruces1.jpg" alt="The Spruces Campground">
                </div>
                <div class="gallery-item">
                    <img src="./images/spruces2.jpg" alt="The Spruces Campground">
                </div>
                <div class="gallery-item">
                    <img src="./images/spruces3.webp" alt="The Spruces Campground">
                </div>
            </div>
            <div class="venue-map">
                <h3>Location</h3>
                <p>The Spruces Campground, S Big Cottonwood Canyon Rd, Salt Lake City, UT 84121</p>
                <div class="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.3210476086416!2d-111.64394082346652!3d40.63350084918456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875272a95556fde3%3A0x65e43cebce6c7e09!2sSpruces%20Campground!5e0!3m2!1sen!2sus!4v1685980001234!5m2!1sen!2sus"
                        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>

    <section id="ceremony" class="section">
        <div class="container">
            <h2>Ceremony Information</h2>
            <div class="decorative-line"></div>
            <div class="content-wrapper">
                <div class="text-content">
                    <h3>Utah Celebration</h3>
                    <p>We're excited to celebrate with our friends and family in a beautiful outdoor ceremony in Big
                        Cottonwood Canyon.</p>
                    <p>The exact date in July 2026 will be announced soon. We're currently finalizing arrangements and
                        will update this page with more information.</p>

                    <h3>What to Expect</h3>
                    <p>Our Utah celebration will be a casual, outdoor event that showcases the natural beauty of the
                        Wasatch Mountains. The ceremony will be followed by a reception with food, drinks, and dancing
                        under the pines.</p>
                </div>
                <div class="image-frame">
                    <img src="./images/spruces3.webp" alt="The Spruces" class="story-image">
                </div>
            </div>
        </div>
    </section>

    <section id="accommodations" class="section">
        <div class="container">
            <h2>Accommodations</h2>
            <div class="decorative-line"></div>
            <div class="accommodation-info">
                <p>While The Spruces is a campground, you don't need to camp! Here are some nearby accommodation
                    options:</p>

                <div class="cards">
                    <div class="card">
                        <h3>Nearby Hotels</h3>
                        <ul>
                            <li>Hyatt Place Cottonwood</li>
                            <li>Cliff Lodge at Snowbird</li>
                            <li>Marriott Salt Lake City Cottonwood</li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3>Camping Options</h3>
                        <ul>
                            <li>The Spruces Campground (book early!)</li>
                            <li>Redman Campground</li>
                            <li>Tanner's Flat Campground</li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3>Vacation Rentals</h3>
                        <ul>
                            <li>Cottonwood Heights</li>
                            <li>Sandy</li>
                            <li>Brighton/Solitude area</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="things-to-do" class="section">
        <div class="container">
            <h2>Things to Do in Utah</h2>
            <div class="decorative-line"></div>
            <div class="slc-activities">
                <p>If you're visiting Utah for our wedding, there are countless adventures waiting for you:</p>
                <div class="cards activity-cards">
                    <div class="card">
                        <h3>Outdoor Adventures</h3>
                        <ul>
                            <li>Hiking in the Wasatch Mountains</li>
                            <li>Visit nearby national parks</li>
                            <li>Mountain biking</li>
                            <li>Scenic drives through the canyons</li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3>Salt Lake City</h3>
                        <ul>
                            <li>Temple Square</li>
                            <li>Natural History Museum</li>
                            <li>Red Butte Garden</li>
                            <li>Downtown dining scene</li>
                        </ul>
                    </div>
                    <div class="card">
                        <h3>Day Trips</h3>
                        <ul>
                            <li>Park City (30 min)</li>
                            <li>Antelope Island (40 min)</li>
                            <li>Sundance Resort (1 hour)</li>
                            <li>Heber Valley (1 hour)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="footer-content">
            <div class="footer-names">Sam & Natalie</div>
            <div class="footer-date">July 2026</div>
            <div class="footer-location">The Spruces Campground, Utah</div>
            <div class="back-home"><a href="index.html">Back to Main Page</a></div>
        </div>
    </footer>

    <script src="slc.js"></script>
</body>

</html>
```
---
## File: slc.js

```js
document.addEventListener('DOMContentLoaded', function () {
    // Set the wedding date (using a placeholder date in July 2026)
    const weddingDate = new Date('July 15, 2026 16:00:00').getTime();

    // Update the countdown every second
    const countdown = setInterval(function () {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById('days').innerHTML = days.toString().padStart(3, '0');
        document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');

        // If the countdown is over
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('days').innerHTML = "000";
            document.getElementById('hours').innerHTML = "00";
            document.getElementById('minutes').innerHTML = "00";
            document.getElementById('seconds').innerHTML = "00";
        }
    }, 1000);

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

    // Add animations when elements come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });

    // Observe all section titles and cards
    document.querySelectorAll('.section h2, .card, .gallery-item').forEach(item => {
        observer.observe(item);
    });
});
```
---
## File: styles.css

```css
/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --sage-green: #7d9b76;
    --sage-light: #a8c4a1;
    --sage-dark: #566d52;
    --terracotta: #c9694a;
    --terracotta-light: #e6b2a1;
    --terracotta-dark: #9a4e34;
    --gold: #d4af37;
    --gold-light: #e5cc7a;
    --gold-dark: #aa8c2c;
    --cream: #f9f7f2;
    --gray-text: #333;
    --white: #ffffff;
}

body {
    font-family: 'Montserrat', sans-serif;
    color: var(--gray-text);
    background-color: var(--cream);
    line-height: 1.6;
}

h1,
h2,
h3,
h4 {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 400;
}

/* Hero Section */
.hero {
    position: relative;
    height: 100vh;
    background-image: url('./images/villa1.avif');
    background-size: cover;
    background-position: center;
    color: var(--white);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.athens-hero {
    background-image: url('./images/villa9.avif');
}

.slc-hero {
    background-image: url('./images/spruces1.jpg');
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    border-radius: 10px;
    animation: fadeIn 2s ease-in-out;
}

.save-date {
    font-family: 'Great Vibes', cursive;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: var(--terracotta-light);
}

.names {
    font-size: 4.5rem;
    margin: 1rem 0;
    letter-spacing: 3px;
    font-weight: 300;
}

.date,
.location {
    font-size: 1.5rem;
    margin-top: 0.5rem;
    font-family: 'Cormorant Garamond', serif;
    letter-spacing: 2px;
}

.location {
    margin-bottom: 2rem;
}

.flourish {
    margin: 1rem auto;
    display: flex;
    justify-content: center;
}

/* Countdown Timer */
.countdown {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}

.countdown-item {
    margin: 0 1rem;
    text-align: center;
    min-width: 70px;
}

.countdown-item span {
    display: block;
}

.countdown-item span:first-child {
    font-size: 2.5rem;
    font-weight: 300;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.2);
}

.label {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 0.5rem;
}

/* Navigation */
nav {
    background-color: var(--white);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

nav ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 1rem 0;
}

nav ul li {
    margin: 0 1.5rem;
}

nav ul li a {
    color: var(--sage-dark);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    padding: 0.5rem 0;
    position: relative;
}

nav ul li a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--terracotta);
    transition: width 0.3s ease;
}

nav ul li a:hover {
    color: var(--terracotta-dark);
}

nav ul li a:hover::after {
    width: 100%;
}

/* Sections */
.section {
    padding: 5rem 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.section h2 {
    text-align: center;
    font-size: 2.5rem;
    color: var(--sage-dark);
    margin-bottom: 0.5rem;
}

.decorative-line {
    height: 2px;
    width: 100px;
    background-color: var(--terracotta);
    margin: 0 auto 3rem;
    position: relative;
}

.decorative-line::before,
.decorative-line::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--terracotta);
    top: -3px;
}

.decorative-line::before {
    left: -4px;
}

.decorative-line::after {
    right: -4px;
}

/* Story Section */
.content-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
}

.image-frame {
    flex: 1;
    min-width: 300px;
    padding: 1rem;
    border: 2px solid var(--sage-light);
    position: relative;
}

.image-frame::before,
.image-frame::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-style: solid;
    z-index: -1;
}

.image-frame::before {
    top: -10px;
    left: -10px;
    border-width: 2px 0 0 2px;
    border-color: var(--terracotta);
}

.image-frame::after {
    bottom: -10px;
    right: -10px;
    border-width: 0 2px 2px 0;
    border-color: var(--terracotta);
}

.story-image {
    width: 100%;
    height: auto;
    display: block;
}

.text-content {
    flex: 1;
    min-width: 300px;
}

.text-content p {
    margin-bottom: 1rem;
    line-height: 1.8;
}

.text-content h3 {
    color: var(--sage-dark);
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
}

.text-content ul {
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
}

.text-content li {
    margin-bottom: 0.5rem;
}

/* Details Section */
.cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
}

.card {
    background-color: var(--white);
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    flex: 1;
    min-width: 250px;
    max-width: 350px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.card-icon {
    margin-bottom: 1.5rem;
}

.card h3 {
    color: var(--sage-dark);
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.card h4 {
    color: var(--sage-dark);
    margin-bottom: 1rem;
    font-size: 1.3rem;
}

.card p {
    color: var(--gray-text);
    font-size: 0.95rem;
    line-height: 1.8;
}

.card ul {
    text-align: left;
    margin-left: 1.5rem;
    font-size: 0.95rem;
    line-height: 1.8;
}

/* Venue Section */
.venue-description {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 3rem;
}

.gallery-item {
    flex: 1;
    min-width: 300px;
    overflow: hidden;
    border-radius: 8px;
}

.gallery-item img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.5s ease;
    display: block;
}

.gallery-item:hover img {
    transform: scale(1.05);
}

.venue-map {
    text-align: center;
}

.venue-map h3 {
    margin-bottom: 1rem;
    color: var(--sage-dark);
    font-size: 1.8rem;
}

.venue-map p {
    margin-bottom: 1.5rem;
}

.map-container {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Locations Section */
.locations-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
    font-size: 1.1rem;
}

.location-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}

.location-card {
    flex: 1;
    min-width: 350px;
    max-width: 500px;
    background-color: var(--white);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    margin-bottom: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.location-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.location-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.location-content {
    padding: 2rem;
    text-align: center;
}

.location-content h3 {
    color: var(--sage-dark);
    margin-bottom: 1rem;
    font-size: 1.8rem;
}

.location-content p {
    margin-bottom: 0.5rem;
}

.location-access {
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--terracotta-light);
}

.access-note {
    font-style: italic;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    color: var(--sage-dark);
}

.location-btn {
    margin-top: 1rem;
}

/* Travel Section */
.travel-info {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 3rem;
}

.travel-card {
    flex: 1;
    min-width: 300px;
    background-color: var(--white);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.travel-card h3 {
    color: var(--sage-dark);
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    text-align: center;
}

.packing-tips {
    background-color: var(--white);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.packing-tips h3 {
    color: var(--sage-dark);
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    text-align: center;
}

.packing-tips ul {
    margin-left: 1.5rem;
    columns: 2;
}

.packing-tips li {
    margin-bottom: 0.5rem;
}

.schedule-list {
    list-style-type: none;
}

.schedule-list li {
    padding: 0.8rem 0;
    border-bottom: 1px solid var(--terracotta-light);
}

.schedule-list li:last-child {
    border-bottom: none;
}

.flight-btn {
    display: inline-block;
    margin-top: 1.5rem;
    background-color: var(--terracotta);
}

.hidden-section {
    display: none;
    opacity: 0;
    transition: opacity 0.5s ease;
}

.show-section {
    display: block;
    opacity: 1;
}

.invitation-code-area {
    max-width: 500px;
    margin: 2rem auto;
    text-align: center;
}

/* Timeline */
.timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.timeline::before {
    content: '';
    position: absolute;
    width: 2px;
    background-color: var(--sage-light);
    top: 0;
    bottom: 0;
    left: 120px;
}

.timeline-item {
    padding: 10px 40px 10px 170px;
    position: relative;
    background-color: inherit;
    margin-bottom: 2rem;
}

.timeline-date {
    position: absolute;
    width: 110px;
    background-color: var(--terracotta);
    color: white;
    border-radius: 5px;
    text-align: center;
    padding: 0.5rem 0;
    left: 0;
    top: 10px;
    font-weight: 500;
}

.timeline-content {
    padding: 1.5rem;
    background-color: var(--white);
    position: relative;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.timeline-content::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 15px solid var(--white);
    border-bottom: 10px solid transparent;
    top: 15px;
    left: -15px;
}

.timeline-content h3 {
    color: var(--sage-dark);
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.timeline-content p {
    margin-bottom: 0.5rem;
}

/* Athens Information */
.athens-day {
    margin-top: 3rem;
}

.athens-day h3 {
    text-align: center;
    color: var(--sage-dark);
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
}

.athens-day p {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 2rem;
}

.athens-activities {
    max-width: 900px;
    margin: 0 auto;
}

/* Villa Details */
.villa-details h3 {
    color: var(--sage-dark);
    margin: 2rem 0 1rem;
    font-size: 1.6rem;
}

/* SLC Specific */
.coming-soon {
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    font-style: italic;
    color: var(--terracotta-dark);
}

.placeholder-details {
    background-color: var(--white);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.placeholder-details p {
    margin-bottom: 1rem;
    text-align: center;
}

.placeholder-details ul {
    max-width: 500px;
    margin: 0 auto;
    list-style-position: inside;
}

.placeholder-details li {
    padding: 0.5rem 0;
    text-align: center;
}

.accommodation-info {
    text-align: center;
    max-width: 700px;
    margin: 0 auto;
}

.accommodation-info p {
    margin-bottom: 1rem;
}

.slc-activities p {
    text-align: center;
    margin-bottom: 2rem;
}

.activity-cards {
    max-width: 1000px;
    margin: 0 auto;
}

/* Code Verification on Main Page */
.code-input-container {
    display: flex;
    margin: 1rem auto;
    gap: 1rem;
    max-width: 350px;
}

#greece-code {
    flex: 1;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
}

.error-message {
    color: #e74c3c;
    font-size: 0.9rem;
    margin-top: 0.5rem;
    min-height: 20px;
}

/* Gallery Section */
.photo-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
}

.photo-gallery .gallery-item {
    height: 300px;
    overflow: hidden;
    border-radius: 8px;
}

.photo-gallery .gallery-item.large {
    grid-column: span 2;
    height: 400px;
}

.photo-gallery .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.photo-gallery .gallery-item:hover img {
    transform: scale(1.05);
}

.btn {
    background-color: var(--terracotta);
    color: var(--white);
    border: none;
    padding: 0.8rem 2rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
    display: inline-block;
    text-decoration: none;
    text-align: center;
}

.btn:hover {
    background-color: var(--terracotta-dark);
}

/* Footer */
footer {
    background-color: var(--sage-dark);
    color: var(--white);
    padding: 3rem 0;
    text-align: center;
}

.footer-content {
    max-width: 600px;
    margin: 0 auto;
}

.footer-names {
    font-family: 'Great Vibes', cursive;
    font-size: 2rem;
    margin-bottom: 1rem;
}

.footer-date,
.footer-location,
.footer-greece,
.footer-slc {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-bottom: 0.5rem;
}

.back-home {
    margin-top: 1.5rem;
}

.back-home a {
    color: var(--white);
    text-decoration: none;
    padding-bottom: 2px;
    border-bottom: 1px solid var(--terracotta-light);
    transition: all 0.3s ease;
}

.back-home a:hover {
    color: var(--terracotta-light);
    border-bottom-color: var(--terracotta-light);
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animated {
    animation: fadeIn 1s ease-out forwards;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-content {
        padding: 1.5rem;
    }

    .names {
        font-size: 3rem;
    }

    .save-date {
        font-size: 2rem;
    }

    .date,
    .location {
        font-size: 1.2rem;
    }

    nav ul {
        flex-wrap: wrap;
    }

    nav ul li {
        margin: 0.5rem;
    }

    .content-wrapper {
        flex-direction: column;
    }

    .countdown-item {
        margin: 0 0.5rem;
        min-width: 60px;
    }

    .countdown-item span:first-child {
        font-size: 1.8rem;
    }

    .photo-gallery .gallery-item.large {
        grid-column: span 1;
        height: 300px;
    }

    .timeline::before {
        left: 60px;
    }

    .timeline-item {
        padding-left: 100px;
    }

    .timeline-date {
        width: 80px;
        font-size: 0.8rem;
    }
}

@media (max-width: 480px) {
    .hero-content {
        padding: 1rem;
    }

    .names {
        font-size: 2.5rem;
    }

    .countdown-item {
        margin: 0 0.3rem;
        min-width: 50px;
    }

    .countdown-item span:first-child {
        font-size: 1.5rem;
    }

    .section {
        padding: 3rem 0;
    }

    .packing-tips ul {
        columns: 1;
    }

    .code-input-container {
        flex-direction: column;
    }
}
```
---

document.addEventListener('DOMContentLoaded', () => {

    // --- CLICK-BASED DROPDOWN LOGIC (PRESERVED) ---
    const dropdowns = document.querySelectorAll('.dropdown-wrapper');
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        toggle.addEventListener('click', (event) => {
            event.stopPropagation();
            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    d.classList.remove('open');
                }
            });
            dropdown.classList.toggle('open');
        });
    });
    document.addEventListener('click', (event) => {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove('open');
            }
        });
    });

    // --- ACTIVE NAV LINK HIGHLIGHTING (PRESERVED) ---
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a, .dropdown-menu a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') && currentPage.endsWith(link.getAttribute('href'))) {
            link.classList.add('active');
            const parentDropdown = link.closest('.dropdown-wrapper');
            if (parentDropdown) {
                parentDropdown.querySelector('.dropdown-toggle').classList.add('active');
            }
        }
    });

    // --- SCROLL-BASED ANIMATIONS (PRESERVED) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    if (!entry.target.classList.contains('research-card')) {
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, { threshold: 0.1 });
        animatedElements.forEach(el => observer.observe(el));
    }

    // --- FOOTER STAGGERED ANIMATION (PRESERVED) ---
    const siteFooter = document.querySelector('.site-footer');
    if (siteFooter) {
        const footerObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                siteFooter.classList.add('is-visible');
                footerObserver.unobserve(siteFooter);
            }
        }, { threshold: 0.1 });
        footerObserver.observe(siteFooter);
    }

    // --- ANIMATED STATS COUNTER (PRESERVED) ---
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const statNumbers = document.querySelectorAll('.stat-number');
        let hasAnimated = false;
        const countUp = (el) => {
            const target = +el.getAttribute('data-target');
            const duration = 2000;
            let current = 0;
            const increment = target / (duration / 16);
            const updateCount = () => {
                current += increment;
                if (current < target) {
                    el.innerText = Math.ceil(current).toLocaleString();
                    requestAnimationFrame(updateCount);
                } else {
                    el.innerText = target.toLocaleString();
                }
            };
            requestAnimationFrame(updateCount);
        };
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasAnimated) {
                statNumbers.forEach(countUp);
                hasAnimated = true;
                statsObserver.unobserve(statsSection);
            }
        }, { threshold: 0.5 });
        statsObserver.observe(statsSection);
    }

    // --- SEARCH OVERLAY LOGIC (PRESERVED) ---
    const searchTrigger = document.querySelector('.search-trigger');
    const searchOverlay = document.querySelector('.search-overlay');
    const closeSearch = document.querySelector('.close-search');

    if (searchTrigger && searchOverlay && closeSearch) {
        searchTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            searchOverlay.classList.add('visible');
            searchOverlay.querySelector('.search-overlay-input').focus();
        });
        closeSearch.addEventListener('click', () => {
            searchOverlay.classList.remove('visible');
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchOverlay.classList.contains('visible')) {
                searchOverlay.classList.remove('visible');
            }
        });
    }

    // --- AUTO-UPDATE YEAR in footer (PRESERVED) ---
    const yearElement = document.querySelector('.footer-bottom-bar .container p:first-child');
    if (yearElement && yearElement.textContent.includes('©')) {
        yearElement.innerHTML = yearElement.innerHTML.replace(/©\s*\d{4}/, `© ${new Date().getFullYear()}`);
    }

    // --- THEME SWITCHER LOGIC ---
    const themeToggleButton = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('#theme-toggle .sun-icon');
    const moonIcon = document.querySelector('#theme-toggle .moon-icon');

    // Function to set the theme
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (theme === 'dark') {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
    };

    // Initialize theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // Listen for theme toggle button click
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (!localStorage.getItem('theme')) { // Only update if no manual override
            setTheme(event.matches ? 'dark' : 'light');
        }
    });

    // --- 3D RESEARCH CARD LOGIC ---
    // (Removed)
});

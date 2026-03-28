// This file can be used to add interactivity to the team page,
// such as animations for the navigation cards or other elements.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Add a staggered animation reveal for the nav cards
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: set a delay based on an index if multiple items
                // are being animated in a group.
                const delay = entry.target.dataset.delay || 0;
                entry.target.style.transitionDelay = `${delay}ms`;
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        observer.observe(el);
    });


});

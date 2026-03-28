document.addEventListener('DOMContentLoaded', () => {
    // --- Form Focus Animations ---
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.borderColor = 'var(--accent-royal-blue-dark)';
            input.style.boxShadow = 'var(--form-input-focus-shadow-dark)';
            if (document.documentElement.getAttribute('data-theme') === 'light') {
                input.style.borderColor = 'var(--accent-royal-blue-light)';
                input.style.boxShadow = 'var(--form-input-focus-shadow-light)';
            }
        });
        input.addEventListener('blur', () => {
            input.style.borderColor = '';
            input.style.boxShadow = '';
        });
    });

    // --- FAQ Accordion ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling;

            accordionItem.classList.toggle('active');


        });
    });

    // --- Scroll Animations (for elements with data-animate) ---
    const animateElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of element is visible

    animateElements.forEach(element => {
        observer.observe(element);
    });
});
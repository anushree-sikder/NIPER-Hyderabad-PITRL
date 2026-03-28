document.addEventListener('DOMContentLoaded', () => {
    // --- SCROLL-TRIGGERED ANIMATIONS ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el, index) => {
        el.style.setProperty('--i', index);
        observer.observe(el);
    });

    // --- PI HERO PARALLAX ---
    const piIntro = document.querySelector('.pi-intro-section');
    const photoWrapper = document.querySelector('.pi-photo-wrapper');
    if (piIntro && photoWrapper) {
        piIntro.addEventListener('mousemove', (e) => {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = piIntro;
            const x = ((clientX - offsetLeft) / offsetWidth - 0.5) * -30;
            const y = ((clientY - offsetTop) / offsetHeight - 0.5) * -30;
            photoWrapper.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
    }
    
    function applyClickGlowEffect(selector) {
        document.addEventListener('click', function(e) {
            const card = e.target.closest(selector);
            if (!card) return;

            if (e.target.closest('a, button')) {
                return;
            }

            card.classList.add('card-clicked');
            setTimeout(() => {
                card.classList.remove('card-clicked');
            }, 600); // Must match animation duration
        });
    }

    applyClickGlowEffect('.expertise-card, .award-item, .patent-card, .cta-link');
});


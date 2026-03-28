document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.facility-card');

    if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -5; // Max rotation 5 degrees
                const rotateY = ((x - centerX) / centerX) * 5; // Max rotation 5 degrees

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });

        // Parallax effect on scroll
        window.addEventListener('scroll', () => {
            const parallaxSections = document.querySelectorAll('.facility-section');
            parallaxSections.forEach(section => {
                const rect = section.getBoundingClientRect();
                const parallaxCards = section.querySelectorAll('.facility-card');
                
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    const speed = 0.1;
                    const yPos = (rect.top * speed);
                    parallaxCards.forEach((card, index) => {
                         if (index % 2 === 0) {
                            card.style.backgroundPosition = `50% ${yPos}px`;
                         } else {
                            card.style.backgroundPosition = `50% ${-yPos}px`;
                         }
                    });
                }
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const bookLinks = document.querySelectorAll('.book-card-link');

    // Check for prefers-reduced-motion to disable animations
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reducedMotion = motionQuery.matches;

    motionQuery.addEventListener('change', () => {
        reducedMotion = motionQuery.matches;
    });

    bookLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent immediate navigation
            event.preventDefault();
            
            // If user prefers reduced motion, navigate instantly
            if (reducedMotion) {
                window.location.href = this.href;
                return;
            }

            // Find the book card element within the link
            const bookCard = this.querySelector('.book-card');

            // Add the 'opening' class to trigger the animation
            if (bookCard) {
                bookCard.classList.add('opening');
            }

            // Set a timeout to allow the animation to play before navigating
            setTimeout(() => {
                window.location.href = this.href;
            }, 500); // 500ms delay, matches the transition duration
        });
    });
});

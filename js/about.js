document.addEventListener('DOMContentLoaded', () => {

    // Fallback for browsers that prefer reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
        return;
    }

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a generic 'is-visible' class to trigger animations
                entry.target.classList.add('is-visible');
                
                // Remove animation classes after they've played to prevent re-triggering
                // and to clean up the element's state.
                const animationDuration = 1000; // Corresponds to the longest animation time
                setTimeout(() => {
                    entry.target.classList.remove(
                        'anim-fade-slide', 
                        'anim-slide-left', 
                        'anim-fade-scale', 
                        'anim-lift', 
                        'anim-fade-up'
                    );
                }, animationDuration);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
        '.anim-fade-slide', 
        '.anim-slide-left', 
        '.anim-fade-scale', 
        '.anim-lift', 
        '.anim-fade-up',
        '.closing-statement' // for its ::after animation
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const awardsSection = document.querySelector('.awards-section-arc');
    if (!awardsSection) return;

    const gallery = awardsSection.querySelector('.awards-gallery-arc');
    const galleryContainer = awardsSection.querySelector('.awards-gallery-container');
    const cards = Array.from(awardsSection.querySelectorAll('.award-card'));
    const totalCards = cards.length;
    
    const dotsContainer = awardsSection.querySelector('.awards-nav-dots');
    const dots = Array.from(awardsSection.querySelectorAll('.dot'));
    const prevBtn = awardsSection.querySelector('.awards-nav-arrow.prev');
    const nextBtn = awardsSection.querySelector('.awards-nav-arrow.next');

    if (!gallery || totalCards === 0) return;

    let angle = 0;
    const radius = 600; 
    const speed = 0.0003; 
    let animationFrameId;
    let isHovering = false;
    let motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let targetAngle = angle;
    let isAnimatingClick = false;

    // Drag-to-scroll state
    let isDragging = false;
    let dragStartX = 0;
    let dragStartAngle = 0;
    let dragVelocity = 0;
    let lastDragX = 0;
    let lastDragTime = 0;

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                awardsSection.classList.add('is-visible');
                if (!motionReduced && !animationFrameId) {
                    animate();
                }
            } else {
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                    animationFrameId = null;
                }
            }
        });
    }, { threshold: 0.1 });

    sectionObserver.observe(awardsSection);

    function animate(time) {
        if (isDragging) {
            // Don't auto-rotate while dragging
        } else if (!isAnimatingClick) {
            // Apply drag momentum if it exists
            if (Math.abs(dragVelocity) > 0.0001) {
                angle += dragVelocity;
                dragVelocity *= 0.95; // Friction
                if (Math.abs(dragVelocity) < 0.0001) dragVelocity = 0;
            } else {
                angle += speed * (isHovering ? 0.2 : 1);
            }
        } else {
            const angleDiff = targetAngle - angle;
            angle += angleDiff * 0.08; // Smooth easing
            if (Math.abs(angleDiff) < 0.001) {
                angle = targetAngle;
                isAnimatingClick = false;
            }
        }
        positionCards(time);
        updateActiveDot();
        animationFrameId = requestAnimationFrame(animate);
    }

    function positionCards(time) {
        cards.forEach((card, index) => {
            const cardAngle = (Math.PI * 2 * index) / totalCards + angle;
            const x = Math.sin(cardAngle) * radius;
            const z = Math.cos(cardAngle) * radius - radius;
            const scale = (z + radius * 2) / (radius * 2);
            
            const yRotation = (x / radius) * 45;

            // Micro-floating animation
            const floatY = time ? Math.sin(time * 0.0005 + index * 0.5) * 5 : 0;
            const floatZ = time ? Math.sin(time * 0.0003 + index * 0.3) * 10 : 0;

            card.style.transform = `
                translateX(${x}px) 
                translateY(${floatY}px)
                translateZ(${z + floatZ}px) 
                rotateY(${yRotation}deg) 
                scale(${scale})
            `;
            
            card.style.opacity = scale > 0.3 ? '1' : '0';
            card.style.zIndex = Math.round(scale * 100);
        });
    }
    
    function updateActiveDot() {
        let closestCardIndex = 0;
        let maxZ = -Infinity;

        cards.forEach((card, index) => {
            const transformMatrix = new DOMMatrix(getComputedStyle(card).transform);
            const z = transformMatrix.m43;
            if (z > maxZ) {
                maxZ = z;
                closestCardIndex = index;
            }
        });

        dots.forEach((dot, index) => {
            if (index === closestCardIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Navigate to a specific card by index
    function navigateToCard(index) {
        const currentAngleMod = angle % (Math.PI * 2);
        const targetCardAngle = -(Math.PI * 2 * index) / totalCards;
        
        let angleDiff = targetCardAngle - currentAngleMod;

        if (angleDiff > Math.PI) {
            angleDiff -= Math.PI * 2;
        } else if (angleDiff < -Math.PI) {
            angleDiff += Math.PI * 2;
        }

        targetAngle = angle + angleDiff;
        isAnimatingClick = true;
        dragVelocity = 0;
    }

    // Get currently focused card index
    function getCurrentCardIndex() {
        let closestCardIndex = 0;
        let maxZ = -Infinity;

        cards.forEach((card, index) => {
            const cardAngle = (Math.PI * 2 * index) / totalCards + angle;
            const z = Math.cos(cardAngle) * radius;
            if (z > maxZ) {
                maxZ = z;
                closestCardIndex = index;
            }
        });
        return closestCardIndex;
    }

    // Arrow navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const current = getCurrentCardIndex();
            const prev = (current - 1 + totalCards) % totalCards;
            navigateToCard(prev);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const current = getCurrentCardIndex();
            const next = (current + 1) % totalCards;
            navigateToCard(next);
        });
    }

    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index, 10);
            navigateToCard(index);
        });
    });

    // Drag-to-scroll interactions (mouse)
    galleryContainer.addEventListener('mousedown', (e) => {
        if (e.target.closest('.awards-nav-arrow')) return;
        isDragging = true;
        isAnimatingClick = false;
        dragVelocity = 0;
        dragStartX = e.clientX;
        dragStartAngle = angle;
        lastDragX = e.clientX;
        lastDragTime = Date.now();
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - dragStartX;
        const sensitivity = 0.003;
        angle = dragStartAngle + dx * sensitivity;

        // Calculate velocity for momentum
        const now = Date.now();
        const dt = now - lastDragTime;
        if (dt > 0) {
            dragVelocity = (e.clientX - lastDragX) * sensitivity / dt * 16;
        }
        lastDragX = e.clientX;
        lastDragTime = now;
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
        }
    });

    // Touch support for drag
    galleryContainer.addEventListener('touchstart', (e) => {
        if (e.target.closest('.awards-nav-arrow')) return;
        isDragging = true;
        isAnimatingClick = false;
        dragVelocity = 0;
        dragStartX = e.touches[0].clientX;
        dragStartAngle = angle;
        lastDragX = e.touches[0].clientX;
        lastDragTime = Date.now();
    }, { passive: true });

    galleryContainer.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const dx = e.touches[0].clientX - dragStartX;
        const sensitivity = 0.003;
        angle = dragStartAngle + dx * sensitivity;

        const now = Date.now();
        const dt = now - lastDragTime;
        if (dt > 0) {
            dragVelocity = (e.touches[0].clientX - lastDragX) * sensitivity / dt * 16;
        }
        lastDragX = e.touches[0].clientX;
        lastDragTime = now;
    }, { passive: true });

    galleryContainer.addEventListener('touchend', () => {
        if (isDragging) {
            isDragging = false;
        }
    });

    // Mouse wheel scrolling
    galleryContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        const scrollSensitivity = 0.002;
        angle += e.deltaY * scrollSensitivity;
        dragVelocity = 0;
        isAnimatingClick = false;
    }, { passive: false });

    // Card hover effects
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            if (!isDragging) isHovering = true;
        });

        card.addEventListener('mouseleave', () => {
            isHovering = false;
        });
    });

    if (motionReduced) {
        positionCards(0);
        updateActiveDot();
    }
});

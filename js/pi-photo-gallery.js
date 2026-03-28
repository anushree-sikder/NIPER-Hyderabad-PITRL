/**
 * 3D Photo Scroll Gallery for Awards & Recognition
 * Supports mixed portrait/landscape slides with drag, wheel, touch, and arrow navigation.
 * To add more slides: just add more .photo-slide elements in the HTML.
 * The JS auto-detects total count and adjusts layout.
 */
document.addEventListener('DOMContentLoaded', () => {
    const gallerySection = document.querySelector('.photo-gallery-3d');
    if (!gallerySection) return;

    const viewport = gallerySection.querySelector('.photo-scroll-viewport');
    const track = gallerySection.querySelector('.photo-scroll-track');
    const slides = Array.from(gallerySection.querySelectorAll('.photo-slide'));
    const totalSlides = slides.length;
    const prevBtn = gallerySection.querySelector('.photo-gallery-arrow.prev');
    const nextBtn = gallerySection.querySelector('.photo-gallery-arrow.next');
    const dots = Array.from(gallerySection.querySelectorAll('.pg-dot'));
    const captionTitle = gallerySection.querySelector('.caption-title');
    const captionDesc = gallerySection.querySelector('.caption-desc');

    if (!track || totalSlides === 0) return;

    let angle = 0;
    const isTeamGallery = gallerySection.closest('.life-at-pitrl-section') !== null;
    const minRadius = isTeamGallery ? 850 : 550;
    const radiusFactor = isTeamGallery ? 120 : 75;
    const radius = Math.max(minRadius, totalSlides * radiusFactor);
    const autoSpeed = 0.00025;
    let animationFrameId = null;
    let isHovering = false;
    let motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Animated navigation
    let targetAngle = angle;
    let isAnimatingNav = false;

    // Drag state
    let isDragging = false;
    let dragStartX = 0;
    let dragStartAngle = 0;
    let dragVelocity = 0;
    let lastDragX = 0;
    let lastDragTime = 0;

    // Intersection observer to start/stop animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
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

    observer.observe(gallerySection);

    function animate(time) {
        if (isDragging) {
            // No auto-rotate while dragging
        } else if (isAnimatingNav) {
            const diff = targetAngle - angle;
            angle += diff * 0.08;
            if (Math.abs(diff) < 0.001) {
                angle = targetAngle;
                isAnimatingNav = false;
            }
        } else if (Math.abs(dragVelocity) > 0.0001) {
            angle += dragVelocity;
            dragVelocity *= 0.94;
            if (Math.abs(dragVelocity) < 0.0001) dragVelocity = 0;
        } else {
            angle += autoSpeed * (isHovering ? 0.15 : 1);
        }

        positionSlides(time);
        updateActiveDot();
        updateCaption();
        animationFrameId = requestAnimationFrame(animate);
    }

    function positionSlides(time) {
        slides.forEach((slide, index) => {
            const cardAngle = (Math.PI * 2 * index) / totalSlides + angle;
            const x = Math.sin(cardAngle) * radius;
            const z = Math.cos(cardAngle) * radius - radius;
            const scale = (z + radius * 2) / (radius * 2);
            const yRotation = (x / radius) * 40;

            // Subtle floating (only if browser supports high frame rate)
            const floatY = time ? Math.sin(time * 0.0004 + index * 0.7) * 4 : 0;

            slide.style.transform = `
                translateX(calc(-50% + ${x}px))
                translateY(calc(-50% + ${floatY}px))
                translateZ(${z}px)
                rotateY(${yRotation}deg)
                scale(${scale})
            `;
            slide.style.opacity = scale > 0.3 ? '1' : '0';
            slide.style.zIndex = Math.round(scale * 100);
        });
    }

    function getFrontCardIndex() {
        let closest = 0;
        let maxZ = -Infinity;
        slides.forEach((slide, index) => {
            const cardAngle = (Math.PI * 2 * index) / totalSlides + angle;
            const z = Math.cos(cardAngle) * radius;
            if (z > maxZ) {
                maxZ = z;
                closest = index;
            }
        });
        return closest;
    }

    function updateActiveDot() {
        const front = getFrontCardIndex();
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === front);
        });
    }

    function updateCaption() {
        const front = getFrontCardIndex();
        const slide = slides[front];
        if (captionTitle) {
            captionTitle.textContent = slide.dataset.title || '';
        }
        if (captionDesc) {
            captionDesc.textContent = slide.dataset.desc || '';
        }
    }

    function navigateToSlide(index) {
        const currentMod = angle % (Math.PI * 2);
        const target = -(Math.PI * 2 * index) / totalSlides;
        let diff = target - currentMod;
        if (diff > Math.PI) diff -= Math.PI * 2;
        else if (diff < -Math.PI) diff += Math.PI * 2;
        targetAngle = angle + diff;
        isAnimatingNav = true;
        dragVelocity = 0;
    }

    // Arrow navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const current = getFrontCardIndex();
            navigateToSlide((current - 1 + totalSlides) % totalSlides);
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const current = getFrontCardIndex();
            navigateToSlide((current + 1) % totalSlides);
        });
    }

    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            navigateToSlide(parseInt(dot.dataset.index, 10));
        });
    });

    // Mouse drag
    viewport.addEventListener('mousedown', (e) => {
        if (e.target.closest('.photo-gallery-arrow')) return;
        isDragging = true;
        isAnimatingNav = false;
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
        angle = dragStartAngle + dx * 0.003;
        const now = Date.now();
        const dt = now - lastDragTime;
        if (dt > 0) {
            dragVelocity = (e.clientX - lastDragX) * 0.003 / dt * 16;
        }
        lastDragX = e.clientX;
        lastDragTime = now;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Touch drag
    viewport.addEventListener('touchstart', (e) => {
        if (e.target.closest('.photo-gallery-arrow')) return;
        isDragging = true;
        isAnimatingNav = false;
        dragVelocity = 0;
        dragStartX = e.touches[0].clientX;
        dragStartAngle = angle;
        lastDragX = e.touches[0].clientX;
        lastDragTime = Date.now();
    }, { passive: true });

    viewport.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const dx = e.touches[0].clientX - dragStartX;
        angle = dragStartAngle + dx * 0.003;
        const now = Date.now();
        const dt = now - lastDragTime;
        if (dt > 0) {
            dragVelocity = (e.touches[0].clientX - lastDragX) * 0.003 / dt * 16;
        }
        lastDragX = e.touches[0].clientX;
        lastDragTime = now;
    }, { passive: true });

    viewport.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Mouse wheel
    viewport.addEventListener('wheel', (e) => {
        e.preventDefault();
        angle += e.deltaY * 0.002;
        dragVelocity = 0;
        isAnimatingNav = false;
    }, { passive: false });

    // Card hover
    slides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            if (!isDragging) isHovering = true;
        });
        slide.addEventListener('mouseleave', () => {
            isHovering = false;
        });
    });

    // Initial position if motion reduced
    if (motionReduced) {
        positionSlides(0);
        updateActiveDot();
        updateCaption();
    }
});

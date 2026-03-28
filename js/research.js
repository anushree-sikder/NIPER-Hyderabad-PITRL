document.addEventListener('DOMContentLoaded', () => {
    // --- Research Card Flip Logic ---
    const researchCardLinks = document.querySelectorAll('.research-card-link');

    researchCardLinks.forEach(link => {
        const card = link.querySelector('.research-group-card');
        const titleReveal = link.querySelector('.card-title-reveal');

        // Desktop: Hover to flip, click to navigate
        if (window.innerWidth > 768) { // Assuming desktop is > 768px
            link.addEventListener('mouseenter', () => {
                card.classList.add('is-flipped');
            });
            link.addEventListener('mouseleave', () => {
                card.classList.remove('is-flipped');
            });
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent flip on click for now
                if (!card.classList.contains('is-flipped')) { // Only navigate if not flipped
                    window.location.href = link.href;
                }
            });
        } else { // Mobile: Tap to flip/unflip, tap again to navigate
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent immediate navigation
                if (card.classList.contains('is-flipped')) {
                    // If already flipped, navigate
                    window.location.href = link.href;
                } else {
                    // If not flipped, flip the card
                    card.classList.add('is-flipped');
                }
            });
             // Hide title when clicking outside flipped card on mobile
            document.addEventListener('click', (event) => {
                if (!link.contains(event.target) && card.classList.contains('is-flipped')) {
                    card.classList.remove('is-flipped');
                }
            });
        }

        // Add click listener to titleReveal for redirection
        if (titleReveal) {
            titleReveal.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior if applicable
                window.location.href = link.href; // Redirect to the card's specific page
            });
        }
    });


    // --- Central Image Parallax and Floating Loop ---
    const researchImageContainer = document.querySelector('.research-image-container');
    const researchMainImage = document.querySelector('.research-main-image');

    if (researchImageContainer && researchMainImage) {
        // Mouse-based parallax
        researchImageContainer.addEventListener('mousemove', (e) => {
            const rect = researchImageContainer.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element.
            const y = e.clientY - rect.top;  // y position within the element.

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const moveX = (x - centerX) / centerX; // -1 to 1
            const moveY = (y - centerY) / centerY; // -1 to 1

            // Apply slight rotation and translation for parallax
            researchMainImage.style.transform = `
                scale(1.03)
                rotateX(${moveY * 5}deg)
                rotateY(${moveX * 5}deg)
                translateZ(10px)
            `;
        });

        researchImageContainer.addEventListener('mouseleave', () => {
            // Reset on mouse leave
            researchMainImage.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg) translateZ(0)';
        });

        // Gentle floating loop - primarily handled by CSS animation, JS can enhance if needed
        // For now, rely on CSS keyframes in research.css (gentleFloat)
    }


    // --- Scroll-triggered reveals specific to research.html ---
    // Using Intersection Observer for the main description
    const researchShortDescription = document.querySelector('.research-short-description');
    if (researchShortDescription) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible'); // Add a class to trigger CSS animation
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of element is visible
        observer.observe(researchShortDescription);
    }


    // --- Student Preview Card Logic ---
    const studentPreviewOverlay = document.querySelector('.student-preview-overlay');
    const studentPreviewCard = document.querySelector('.student-preview-card');
    const closePreviewCardButton = document.querySelector('.close-preview-card');
    const memberItems = document.querySelectorAll('.member-item');

    if (studentPreviewOverlay && studentPreviewCard && closePreviewCardButton && memberItems.length > 0) {
        const memberPreviewName = studentPreviewCard.querySelector('.member-preview-name');
        const memberPreviewRole = studentPreviewCard.querySelector('.member-preview-role');
        const memberPreviewGroup = studentPreviewCard.querySelector('.member-preview-group');
        const memberPreviewLinkedin = studentPreviewCard.querySelector('.member-preview-linkedin');
        const memberPhotoPlaceholder = studentPreviewCard.querySelector('.member-photo-placeholder');

        memberItems.forEach(item => {
            item.addEventListener('click', (event) => {
                // Prevent opening preview if clicking LinkedIn link directly
                if (event.target.closest('.linkedin-link')) {
                    return;
                }
                
                const name = item.dataset.name;
                const role = item.dataset.role;
                const group = item.dataset.group;
                const linkedin = item.dataset.linkedin;

                memberPreviewName.textContent = name;
                memberPreviewRole.textContent = role;
                memberPreviewGroup.textContent = group;
                if (linkedin) {
                    memberPreviewLinkedin.href = linkedin;
                    memberPreviewLinkedin.style.display = 'inline-block';
                } else {
                    memberPreviewLinkedin.style.display = 'none';
                }
                // Placeholder for photo - can be dynamically set if image assets are available
                memberPhotoPlaceholder.textContent = name.split(' ').map(n => n[0]).join(''); // Initials

                studentPreviewOverlay.classList.add('visible');
            });
        });

        closePreviewCardButton.addEventListener('click', () => {
            studentPreviewOverlay.classList.remove('visible');
        });

        studentPreviewOverlay.addEventListener('click', (event) => {
            // Close if clicking outside the card
            if (event.target === studentPreviewOverlay) {
                studentPreviewOverlay.classList.remove('visible');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && studentPreviewOverlay.classList.contains('visible')) {
                studentPreviewOverlay.classList.remove('visible');
            }
        });
    }

    // --- Common Animations for Subpage Content ---
    // Intersection Observer for animated content sections
    const sectionContents = document.querySelectorAll('.section-content');
    if (sectionContents.length > 0) {
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        sectionContents.forEach(section => {
            sectionObserver.observe(section);
        });
    }

    // Intersection Observer for the animated divider
    const animatedDivider = document.querySelector('.animated-divider');
    if (animatedDivider) {
        const dividerObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible'); // Trigger CSS animation
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of divider is visible
        dividerObserver.observe(animatedDivider);
    }


    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling;
            
            const isActive = accordionItem.classList.contains('active');

            if (!isActive) {
                // Opening
                accordionItem.classList.add('active');
                header.classList.add('active');
                
                // Add a significant buffer to the scrollHeight to fully accommodate the padding-bottom that expands via CSS
                const targetHeight = accordionContent.scrollHeight + 150; 
                accordionContent.style.maxHeight = targetHeight + 'px';
                
                // Clear the exact pixel limits after animation completes so it can freely expand on resize without cutting off
                setTimeout(() => {
                    if (accordionItem.classList.contains('active')) {
                        accordionContent.style.maxHeight = 'none';
                    }
                }, 400); 
            } else {
                // Closing
                if (accordionContent.style.maxHeight === 'none') {
                    // Temporarily lock it to a precise pixel height before setting 0 to make the collapse animation smooth
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                    // Trigger reflow to immediately apply the specific height
                    accordionContent.offsetHeight; 
                }
                
                accordionItem.classList.remove('active');
                header.classList.remove('active');
                // The delay of 10ms ensures the reflow happens first before applying '0'
                setTimeout(() => {
                    accordionContent.style.maxHeight = '0';
                }, 10);
            }
        });
    });
});

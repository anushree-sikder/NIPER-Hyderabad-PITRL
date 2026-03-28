document.addEventListener('DOMContentLoaded', () => {
    // Dummy Data for News
    const newsData = [
        {
            id: 1,
            title: "PITRL Secures Major Grant for AI-Driven Drug Discovery",
            date: "2026-01-05",
            category: "announcements",
            excerpt: "PITRL is proud to announce securing a multi-million dollar grant to fund groundbreaking research in AI-driven drug discovery for neurodegenerative diseases.",
            link: "#",
            year: 2026
        },
        {
            id: 2,
            title: "Dr. Srivastava to Keynote International Nanomedicine Conference",
            date: "2026-01-01",
            category: "media",
            excerpt: "Our Principal Investigator, Dr. Saurabh Srivastava, has been invited to deliver the keynote address at the upcoming Global Nanomedicine Summit in Kyoto, Japan.",
            link: "#",
            year: 2026
        },
        {
            id: 3,
            title: "Breakthrough in Targeted Cancer Therapy Published in Nature Nano",
            date: "2025-11-20",
            category: "research-highlights",
            excerpt: "New research from PITRL demonstrates a novel nanocarrier system significantly reducing tumor size in preclinical lung cancer models.",
            link: "#",
            year: 2025
        },
        {
            id: 4,
            title: "PITRL Team Wins 'Innovation in Pharma' Award",
            date: "2025-10-15",
            category: "awards",
            excerpt: "The entire PITRL team was honored with the prestigious 'Innovation in Pharma' award for their collective contributions to translational science.",
            link: "#",
            year: 2025
        },
        {
            id: 5,
            title: "Workshop: Advanced Techniques in Solid-State Characterization",
            date: "2025-09-01",
            category: "events",
            excerpt: "Join PITRL experts for a hands-on workshop covering the latest advancements and practical applications in solid-state pharmaceutical characterization.",
            link: "#",
            year: 2025
        },
        {
            id: 6,
            title: "New Patent Filed: Smart Insulin Delivery System",
            date: "2024-07-10",
            category: "announcements",
            excerpt: "PITRL researchers have filed a new patent for a smart, glucose-responsive insulin delivery system, promising enhanced diabetes management.",
            link: "#",
            year: 2024
        },
        {
            id: 7,
            title: "Coverage in 'Pharmaceutical Technology' Magazine",
            date: "2024-06-01",
            category: "media",
            excerpt: "A feature article highlights PITRL's cutting-edge work in transdermal drug delivery for dermatological conditions.",
            link: "#",
            year: 2024
        },
        {
            id: 8,
            title: "PhD Scholar Anupama Sikder Awarded Research Fellowship",
            date: "2024-05-20",
            category: "awards",
            excerpt: "Congratulations to Anupama Sikder on receiving the competitive National Research Fellowship for her work in neuro-nanotechnology.",
            link: "#",
            year: 2024
        },
    ];

    const newsGrid = document.querySelector('.news-grid');
    const newsSearchInput = document.getElementById('news-search');
    const yearFilterContainer = document.querySelector('.year-filter');
    const typeFilterContainer = document.querySelector('.type-filters');

    let currentYearFilter = 'all';
    let currentTypeFilter = 'all';
    let currentSearchQuery = '';

    // --- Dynamic Year Filter Generation ---
    function generateYearFilters() {
        const years = [...new Set(newsData.map(item => item.year))].sort((a, b) => b - a);
        yearFilterContainer.innerHTML = `<div class="year-pill active" data-year="all">All</div>` + 
                                        years.map(year => `<div class="year-pill" data-year="${year}">${year}</div>`).join('');
    }

    // --- Render News Cards ---
    function renderNewsCards() {
        let filteredNews = newsData.filter(item => {
            const matchesYear = currentYearFilter === 'all' || item.year === parseInt(currentYearFilter);
            const matchesType = currentTypeFilter === 'all' || item.category === currentTypeFilter;
            const matchesSearch = item.title.toLowerCase().includes(currentSearchQuery) || 
                                  item.excerpt.toLowerCase().includes(currentSearchQuery);
            return matchesYear && matchesType && matchesSearch;
        });

        newsGrid.innerHTML = ''; // Clear previous cards

        filteredNews.forEach((item, index) => {
            const newsCard = document.createElement('div');
            newsCard.classList.add('news-card');
            newsCard.setAttribute('data-animate', ''); // For scroll animation
            newsCard.style.setProperty('--i', index); // For staggered animation delay

            newsCard.innerHTML = `
                <span class="news-category-tag">${item.category.replace('-', ' & ').replace(/\b\w/g, char => char.toUpperCase())}</span>
                <h3 class="news-card-title">${item.title}</h3>
                <p class="news-date">${new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p class="news-excerpt">${item.excerpt}</p>
                <a href="${item.link}" class="btn btn-small" target="_blank" rel="noopener noreferrer">Read More</a>
            `;
            newsGrid.appendChild(newsCard);
        });

        // Re-initialize scroll animations after new cards are rendered
        initScrollAnimations();
    }

    // --- Filter Event Listeners ---
    yearFilterContainer.addEventListener('click', (event) => {
        const pill = event.target.closest('.year-pill');
        if (pill) {
            yearFilterContainer.querySelectorAll('.year-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentYearFilter = pill.dataset.year;
            renderNewsCards();
        }
    });

    typeFilterContainer.addEventListener('click', (event) => {
        const pill = event.target.closest('.type-pill');
        if (pill) {
            typeFilterContainer.querySelectorAll('.type-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentTypeFilter = pill.dataset.type;
            renderNewsCards();
        }
    });

    newsSearchInput.addEventListener('input', (event) => {
        currentSearchQuery = event.target.value.toLowerCase();
        renderNewsCards();
    });

    // --- Scroll Animation (Fade + Rise) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // observer.unobserve(entry.target); // Optional: if you want animation to play only once
            } else {
                // entry.target.classList.remove('is-visible'); // Optional: if you want animation to reset when out of view
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of item is visible

    function initScrollAnimations() {
        document.querySelectorAll('.news-card[data-animate]').forEach(card => {
            observer.observe(card);
        });
    }

    // --- Micro Parallax on Mouse Move (Desktop Only) ---
    let parallaxTarget = null;
    let parallaxTimeout;

    newsGrid.addEventListener('mouseover', (e) => {
        const card = e.target.closest('.news-card');
        if (card && window.innerWidth > 768) { // Only on desktop
            if (parallaxTarget !== card) {
                parallaxTarget = card;
            }
            clearTimeout(parallaxTimeout);
            card.style.transition = 'none'; // Disable transition during active hover for smooth mouse tracking
        }
    });

    newsGrid.addEventListener('mousemove', (e) => {
        if (parallaxTarget && window.innerWidth > 768) {
            const card = parallaxTarget;
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;

            const rotateX = -mouseY / rect.height * 10; // Adjust sensitivity
            const rotateY = mouseX / rect.width * 10;   // Adjust sensitivity

            card.style.transform = `translateY(-8px) translateZ(20px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    });

    newsGrid.addEventListener('mouseout', (e) => {
        if (parallaxTarget && window.innerWidth > 768) {
            const card = parallaxTarget;
            card.style.transition = 'all var(--transition-medium) cubic-bezier(0.175, 0.885, 0.32, 1.275)'; // Re-enable transition
            card.style.transform = 'translateY(0) translateZ(0) rotateX(0deg) rotateY(0deg)'; // Reset transform
            parallaxTarget = null;
        }
    });


    // Initial render
    generateYearFilters();
    renderNewsCards();
});

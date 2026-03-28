document.addEventListener('DOMContentLoaded', () => {
    const patentsData = [
        // 2025
        {
            year: 2025,
            title: "PHARMACEUTICAL COMPOSITION OF RUXOLITINIB AND SALT THEREOF FOR THE MANAGEMENT OF SKIN MANIFESTATIONS",
            inventors: "Ratnam Sreya, Shweta Nene, Ganesh B. Vambhurkar, Dr. Shashi Bala Singh, Dr. Saurabh Srivastava",
            status: "Granted",
            image: "../assets/images/patents images/PHARMACEUTICAL_COMPOSITION_OF_RUXOLITINIB_AND_SALT_THEREOF_FOR_THE_MANAGEMENT_OF_SKIN_MANIFESTATIONS_2025.png",
            file: "../assets/docs/Patents/Ruxolitinib_Granted Patent Certificate.pdf"
        },
        {
            year: 2025,
            title: "PHARMACEUTICAL COMPOSITION OF ROSUVASTATIN AND SALT THEREOF FOR THE MANAGEMENT OF RHEUMATOID ARTHRITIS",
            inventors: "National Institute of Pharmaceutical Education and Research Hyderabad (Applicant) — Inventors not publicly disclosed",
            status: "Granted",
            image: "../assets/images/patents images/PHARMACEUTICAL_COMPOSITION_OF_ROSUVASTATIN_AND_SALT_THEREOF_FOR_THE_MANAGEMENT_OF_RHEUMATOID_ARTHRITIS_2025.png",
            file: "../assets/docs/Patents/Rosuvastatin_Granted Patent.pdf"
        },
        {
            year: 2025,
            title: "SOLUBLE DRUG DELIVERY COMPOSITION FOR LEISHMANIASIS AND METHOD FOR SYNTHESIS THEREOF",
            inventors: "Atul Mourya, Saurabh Shah, Chantibabu Katta, Saurabh Srivastava, Jitender Madan, Vasundhra Bhandari, Amol Dikundwar, Shashi Bala Singh",
            status: "Granted",
            image: "../assets/images/patents images/SOLUBLE_DRUG_DELIVERY_COMPOSITION_FOR_LEISHMANIASIS_AND_METHOD_FOR_SYNTHESIS_THEREOF_2025.png",
            file: "../assets/docs/Patents/LEISHMANIASIS_Granted Patent.pdf"
        },
        // 2024
        {
            year: 2024,
            title: "PHARMACEUTICAL TOPICAL COMPOSITION COMPRISING ABROCITINIB FOR SKIN MANIFESTATIONS",
            inventors: "Dr. Saurabh Srivastava, Dr. Giriraj Pandey, Akshita Jain, Tejaswini Kolipaka, Noella Abraham",
            status: "Granted",
            image: "../assets/images/patents images/PHARMACEUTICAL_TOPICAL_COMPOSITION_COMPRISING_ABROCITINIB_FOR_SKIN_MANIFESTATIONS_2024.png",
            file: "../assets/docs/Patents/ABROCITINIB Granted Patent_202341036715.pdf"
        },
        // 2023
        {
            year: 2023,
            title: "PHARMACEUTICAL COMPOSITIONS FOR OBESITY MANAGEMENT",
            inventors: "Dr. Reddy's Laboratories Limited (Applicant) — Inventors not publicly disclosed",
            status: "Granted",
            image: "../assets/images/patents images/PHARMACEUTICAL_COMPOSITIONS_FOR_OBESITY_MANAGEMENT_2023.png",
            file: "../assets/docs/Patents/Patent Copy_Naltrexone.pdf"
        },
        {
            year: 2023,
            title: "PHARMACEUTICAL COMPOSITION OF ROFLUMILAST FOR THE MANAGEMENT OF PSORIASIS",
            inventors: "Velpula Prasannanjaneyulu, Shweta Nene, Ganesh B. Vambhurkar, Dr. Saurabh Srivastava",
            status: "Granted",
            image: "../assets/images/patents images/PHARMACEUTICAL_COMPOSITION_OF_ROFLUMILAST_FOR_THE_MANAGEMENT_OF_PSORIASIS_2023.png",
            file: "../assets/docs/Patents/Roflumilast_Granted Patent.pdf"
        },
        {
            year: 2023,
            title: "PHARMACEUTICAL COMPOSITION OF PIRFENIDONE FOR THE MANAGEMENT OF RHEUMATOID ARTHRITIS",
            inventors: "National Institute of Pharmaceutical Education and Research Hyderabad (Applicant) — Inventors not publicly disclosed",
            status: "Granted",
            image: "../assets/images/patents images/PHARMACEUTICAL_COMPOSITION_OF_PIRFENIDONE_FOR_THE_MANAGEMENT_OF_RHEUMATOID_ARTHRITIS_2023.png",
            file: "../assets/docs/Patents/202341013877 PIRFENIDONE Grant Certificate.pdf"
        },
        {
            year: 2023,
            title: "TOPICAL PHARMACEUTICAL COMPOSITION FOR TREATMENT OF PSORIASIS",
            inventors: "National Institute of Pharmaceutical Education and Research Hyderabad (Applicant) — Inventors not publicly disclosed",
            status: "Granted",
            image: "../assets/images/patents images/TOPICAL_PHARMACEUTICAL_COMPOSITION_FOR_TREATMENT_OF_PSORIASIS_2023.png",
            file: "../assets/docs/Patents/IBRUTINIB_PSORIASIS.pdf"
        },
        {
            year: 2023,
            title: "PHARMACEUTICAL COMPOSITION OF TOFACITINIB FOR THE MANAGEMENT OF ATOPIC DERMATITIS",
            inventors: "Dr. Shashi Bala Singh, Dr. Saurabh Srivastava, Atmakuri Srividya, Shweta Nene",
            status: "Granted",
            image: "../assets/images/patents images/PHARMACEUTICAL_COMPOSITION_OF_TOFACITINIB_FOR_THE_MANAGEMENT_OF_ATOPIC_DERMATITIS_2023.png",
            file: "../assets/docs/Patents/TOFACITINIB GRANTED PATENT.pdf"
        },
        // 2020
        {
            year: 2020,
            title: "PHARMACEUTICAL COMPOSITIONS OF ACOTIAMIDE AND PROTON PUMP INHIBITOR",
            inventors: "Yuvaneshwari Kanagasabapathy, HariHaran Venugopal, Nidhish Ayachi, Rahul Prakash Gangwal, Rajib Lochan (Dr. Reddy's Laboratories)",
            status: "Published",
            image: "../assets/images/patents images/PHARMACEUTICAL_COMPOSITIONS_OF_ACOTIAMIDE_AND_PROTON_PUMP_INHIBITOR_2020.png",
            file: "../assets/docs/Patents/WO2020104955_Acotiamide+PPI.pdf"
        },
        // 2017
        {
            year: 2017,
            title: "PHARMACEUTICAL COMPOSITION FOR TREATING ACNE",
            inventors: "Yogesh Bapurao Pawar, Kailas Khomane, Saurabh Srivastava, Bijay Kumar Padhi, Rajeev Singh Raghuvanshi",
            status: "Published",
            image: "../assets/images/patents images/PHARMACEUTICAL_COMPOSITION_FOR_TREATING_ACNE_2017.png",
            file: "../assets/docs/Patents/US20170340594A1_P ceutical Comp for Treating Acne.pdf"
        },
        {
            year: 2017,
            title: "MODIFIED RELEASE NICERGOLINE COMPOSITIONS",
            inventors: "Rajeev Singh Raghuvanshi, Bijay Kumar Padhi, Saurabh Srivastava, Amit Garg",
            status: "Published",
            image: "../assets/images/patents images/MODIFIED_RELEASE_NICERGOLINE_COMPOSITIONS_2017.png",
            file: "../assets/docs/Patents/WO2017006290_Nicergoline PCT publication.pdf"
        },
        // 2015
        {
            year: 2015,
            title: "EXTENDED RELEASE DOSAGE FORMS OF METOPROLOL",
            inventors: "Prashant Manohar Mandaogade, Venkatesh Madhavacharya Joshi, Saurabh Srivastava, Vinayak Dinkar Kadam, Girish Kumar Jain",
            status: "Granted",
            image: "../assets/images/patents images/EXTENDED_RELEASE_DOSAGE_FORMS_OF_METOPROLOL_2015.png",
            file: "../assets/docs/Patents/US8962016B2_Most Recent.pdf"
        },
        // 2008
        {
            year: 2008,
            title: "PHARMACEUTICAL COMPOSITIONS OF BUPROPION",
            inventors: "Venkatesh Madhavacharya Joshi, Pravin M. Mandaogade, Mahavir B. Chougule, Girish Kumar Jain (Wockhardt Research Centre)",
            status: "Published",
            image: "../assets/images/patents images/PHARMACEUTICAL_COMPOSITIONS_OF_BUPROPION_2008.png",
            file: "../assets/docs/Patents/WO2008026044A2_Bupropion Recent.pdf"
        }
    ];

    const patentsGrid = document.getElementById('patents-grid');
    const yearContainer = document.getElementById('year-filter');
    const searchInput = document.getElementById('patent-search');

    let currentYearFilter = 'all';
    let currentSearchQuery = '';

    function renderPatents() {
        const filteredPatents = patentsData.filter(p => {
            const matchesYear = currentYearFilter === 'all' || p.year === parseInt(currentYearFilter);
            const matchesSearch = p.title.toLowerCase().includes(currentSearchQuery) || p.inventors.toLowerCase().includes(currentSearchQuery);
            return matchesYear && matchesSearch;
        });
        
        patentsGrid.innerHTML = '';

        if (filteredPatents.length === 0) {
            patentsGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; font-size: 1.2rem; margin-top: 2rem;">No patents match your search.</p>';
            return;
        }

        filteredPatents.forEach((patent, index) => {
            const card = document.createElement('a');
            card.href = patent.file;
            card.target = "_blank";
            card.rel = "noopener noreferrer";
            card.className = "patent-card";
            card.setAttribute('data-animate', '');
            card.style.animationDelay = `${index * 0.1}s`;

            const statusClass = patent.status.toLowerCase();

            card.innerHTML = `
                <div class="patent-image-wrapper">
                    <img src="${patent.image}" alt="${patent.title} Certificate" class="patent-image" onerror="this.onerror=null; this.src='../assets/images/PITRL_Logo.png'; this.style.objectFit='contain';">
                </div>
                <div class="patent-details">
                    <div class="patent-year">${patent.year}</div>
                    <h3 class="patent-title" title="${patent.title}">${patent.title.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</h3>
                    <p class="patent-inventors"><strong>Inventors:</strong> ${patent.inventors}</p>
                    <div class="patent-footer">
                        <span class="patent-status ${statusClass}">${patent.status}</span>
                        <svg class="patent-link-icon" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </div>
                </div>
            `;
            patentsGrid.appendChild(card);
        });
        
        // Re-trigger Intersection Observer
        initScrollAnimations();
    }

    yearContainer.addEventListener('click', (e) => {
        const item = e.target.closest('.year-item');
        if (item) {
            yearContainer.querySelectorAll('.year-item').forEach(p => p.classList.remove('active'));
            item.classList.add('active');
            currentYearFilter = item.dataset.year;
            renderPatents();
        }
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value.toLowerCase();
            renderPatents();
        });
    }

    // Scroll Animation observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible', 'fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    function initScrollAnimations() {
        document.querySelectorAll('.patent-card').forEach(card => {
            observer.observe(card);
        });
    }

    renderPatents();
});

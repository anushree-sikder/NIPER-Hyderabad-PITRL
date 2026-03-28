document.addEventListener('DOMContentLoaded', () => {
    const phdScholars = [
        { name: 'Anupama Sikder', group: 'Neuro Research Group', bio: 'An exceptional all-rounder and academic topper, she engineers the future of mind medicine by designing nanotech-driven, brain-targeted delivery systems to conquer CNS disorders.', linkedin: 'https://www.linkedin.com/in/anupama-sikder-700295141/', image: 'assets/images/team/current members/Current Ph.D. Scholars/Anupama Sikder.jfif' },
        { name: 'Etikala Amulya', group: 'Neuro Research Group', bio: 'Investigating brain-targeted delivery systems for CNS disorders', linkedin: 'https://www.linkedin.com/in/etikala-amulya-605a94172/', image: 'assets/images/team/current members/Current Ph.D. Scholars/Etikala Amulya.jpg' },
        { name: 'Ganesh Vambhurkar', group: 'Derma Research Group', bio: 'Innovating topical and transdermal drug delivery systems.', linkedin: 'https://www.linkedin.com/in/ganesh-vambhurkar-3ba111154/', image: 'assets/images/team/current members/Current Ph.D. Scholars/Ganesh Vambhurkar.jpg' },
        { name: 'Giriraj Pandey', group: 'Diabetes Research Group', bio: 'Focused on smart drug delivery systems for glucose regulation.', linkedin: 'https://www.linkedin.com/in/giriraj-pandey-042720202/', image: 'assets/images/team/current members/Current Ph.D. Scholars/Giriraj Pandey .jpg' },
        { name: 'Vivek Phatale', group: 'Lung Cancer Research Group', bio: 'Developing targeted formulations for lung cancer therapy.', linkedin: 'https://www.linkedin.com/in/vivekphatale01/', image: 'assets/images/team/current members/Current Ph.D. Scholars/Vivek Phatale.jpg' },
        { name: 'Tejaswini Kolipaka', group: 'Diabetes Research Group', bio: 'Researching novel formulations for anti-diabetic agents.', linkedin: 'https://www.linkedin.com/in/tejaswini-kolipaka-864972213/', image: 'assets/images/team/current members/Current Ph.D. Scholars/Tejaswini Kolipaka.jpg' },
        { name: 'Pooja Kairnar', group: 'Derma Research Group', bio: 'Exploring nanocarriers for enhanced skin delivery.', linkedin: 'https://www.linkedin.com/in/pooja-khairnar-05b959212/', image: 'assets/images/team/current members/Current Ph.D. Scholars/Pooja Kairnar.jpg' },
        { name: 'Suraj Wagh', group: 'Oral Cancer Research Group', bio: 'Working on differentiated pharmaceutical products for oncology.', linkedin: 'https://www.linkedin.com/in/suraj-wagh-30096b157/', image: 'assets/images/team/current members/Current Ph.D. Scholars/Suraj Wagh.jpg' },
        { name: 'Abhishek Sharma', group: 'Solid-State Research Group', bio: 'Characterizing pharmaceutical solids to improve drug stability and bioavailability.', linkedin: 'https://www.linkedin.com/in/abhishek-sharma-797608184/', image: 'assets/images/team/current members/Current Ph.D. Scholars/Abhishek Sharma.jpg' },
        { name: 'Shalini Shukla', group: 'Lung Cancer Research Group', bio: 'Designing personalized therapeutic systems for lung cancer.', linkedin: 'https://www.linkedin.com/in/shalini-shukla-65082b1ab/', image: 'assets/images/team/current members/Current Ph.D. Scholars/Shalini Shukla.jpg' },
    ];

    const msScholars = [
        { name: 'Bishal Samadder', group: 'Oral Cancer Research Group', bio: 'Exploring nanomedicine approaches for oral cancer treatment.', linkedin: 'https://www.linkedin.com/in/bishal-samadder-598869263/', image: 'assets/images/team/current members/Current M.S. Scholars/Bishal Samadder.jpg' },
        { name: 'Ashish Kumar Singh', group: 'Diabetes Research Group', bio: 'Developing novel systems for enhanced diabetes management.', linkedin: 'https://www.linkedin.com/in/aashish-kumar-singh-98a41529a/', image: 'assets/images/team/current members/Current M.S. Scholars/Ashish Kumar Singh.jpg' },
        { name: 'Chandan Pandia', group: 'Solid-State Research Group', bio: 'Focused on cocrystal and amorphous solid dispersion development.', linkedin: 'https://www.linkedin.com/in/chandan-pandia/', image: 'assets/images/team/current members/Current M.S. Scholars/Chandan Pandia.jpg' },
        { name: 'Aashi Srivastava', group: 'Derma Research Group', bio: 'Innovating formulations for dermatological conditions.', linkedin: 'https://www.linkedin.com/in/aashi-srivastava1701/', image: 'assets/images/team/current members/Current M.S. Scholars/Aashi Srivastava .jpg' },
        { name: 'Prerna Shetty', group: 'Lung Cancer Research Group', bio: 'Working on tumor-targeted systems for lung cancer.', linkedin: 'https://www.linkedin.com/in/prerana-shetty-b74b63363/', image: 'assets/images/team/current members/Current M.S. Scholars/Prerna Shetty.jpg' },
        { name: 'Pallavi Chaure', group: 'Derma Research Group', bio: 'Developing novel topical formulations for skin diseases.', linkedin: 'https://www.linkedin.com/in/pallavi-chaure/', image: 'assets/images/team/current members/Current M.S. Scholars/Pallavi Chaure.jpg' },
        { name: 'Annu Devi', group: 'Lung Cancer Research Group', bio: 'Focused on targeted therapeutics for lung cancer.', linkedin: 'https://www.linkedin.com/in/annu-devi-16963129b/', image: 'assets/images/team/current members/Current M.S. Scholars/Annu Devi.jpg' },
    ];

    function createMemberCard(member) {
        const initials = member.name.split(' ').map(n => n[0]).join('');
        return `
            <div class="flip-card" tabindex="0" style="--i: ${Math.random() * 10};">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        ${member.image ? `<img src="${encodeURI(member.image)}" alt="${member.name}" class="member-photo">` : `<div class="member-photo-placeholder" style="--initials: '${initials}';"></div>`}
                        <h3 class="member-name">${member.name}</h3>
                        <p class="member-group">${member.group}</p>
                        <div class="linkedin-icon">
                           <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </div>
                    </div>
                    <div class="flip-card-back">
                        <h3>${member.name}</h3>
                        <p class="member-bio">${member.bio}</p>
                        <a href="${member.linkedin}" target="_blank" class="btn btn-secondary btn-small">View LinkedIn</a>
                    </div>
                </div>
            </div>
        `;
    }

    const phdGrid = document.querySelector('.team-grid-section .container .team-grid:nth-of-type(1)');
    if (phdGrid) phdGrid.innerHTML = phdScholars.map(createMemberCard).join('');

    const msGrid = document.querySelector('.team-grid-section .container .team-grid:nth-of-type(2)');
    if (msGrid) msGrid.innerHTML = msScholars.map(createMemberCard).join('');

    // Animate on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });

    document.querySelectorAll('[data-animate]').forEach((el) => {
        observer.observe(el);
    });

    function applyClickGlowEffect(selector) {
        document.addEventListener('click', function (e) {
            const card = e.target.closest(selector);
            if (!card) return;

            // Stop if clicking on an interactive element inside the card
            if (e.target.closest('a, button')) {
                return;
            }

            card.classList.add('card-clicked');
            setTimeout(() => {
                card.classList.remove('card-clicked');
            }, 600); // Must match animation duration
        });
    }

    applyClickGlowEffect('.flip-card');
});

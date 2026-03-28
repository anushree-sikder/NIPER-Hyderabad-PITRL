document.addEventListener('DOMContentLoaded', () => {
    const currentMembers = [
        { name: 'Suraj Wagh', role: 'Ph.D. Scholar', bio: 'Working on differentiated pharmaceutical products for oncology.', linkedin: 'https://www.linkedin.com/in/suraj-wagh-30096b157/', image: 'assets/images/team/current members/Current Ph.D. Scholars/Suraj Wagh.jpg' },
        { name: 'Vivek Phatale', role: 'Ph.D. Scholar', bio: 'Developing targeted formulations for lung cancer therapy.', linkedin: 'https://www.linkedin.com/in/vivekphatale01/', image: 'assets/images/team/current members/Current Ph.D. Scholars/Vivek Phatale.jpg' },
        { name: 'Shalini Shukla', role: 'Ph.D. Scholar', bio: 'Designing personalized therapeutic systems for lung cancer.', linkedin: 'https://www.linkedin.com/in/shalini-shukla-65082b1ab/', image: 'assets/images/team/current members/Current Ph.D. Scholars/Shalini Shukla.jpg' },
        { name: 'Bishal Samadder', role: 'M.S. Scholar', bio: 'Exploring nanomedicine approaches for oral cancer treatment.', linkedin: 'https://www.linkedin.com/in/bishal-samadder-598869263/', image: 'assets/images/team/current members/Current M.S. Scholars/Bishal Samadder.jpg' },
        { name: 'Prerna Shetty', role: 'M.S. Scholar', bio: 'Working on tumor-targeted systems for lung cancer.', linkedin: 'https://www.linkedin.com/in/prerana-shetty-b74b63363/', image: 'assets/images/team/current members/Current M.S. Scholars/Prerna Shetty.jpg' },
        { name: 'Annu Devi', role: 'M.S. Scholar', bio: 'Focused on targeted therapeutics for lung cancer.', linkedin: 'https://www.linkedin.com/in/annu-devi-16963129b/', image: 'assets/images/team/current members/Current M.S. Scholars/Annu Devi.jpg' }
    ];

    const alumni = [
        { name: 'Dr. Paras Famta', role: 'Post-Doctoral Alumnus', bio: 'Completed post-doctoral research focusing on developing novel therapeutic strategies for oral cancer using advanced nanomedicine.', linkedin: 'https://www.linkedin.com/in/paras-famta-87770810b/', image: 'assets/images/team/alumni/Ph.D. Alumni/Dr. Paras Famta.png' },
        { name: 'Saurabh Shah', role: 'Ph.D. Alumnus', bio: 'Completed Ph.D. in cancer nanomedicine.', linkedin: 'https://www.linkedin.com/in/saurabh-shah-990478152/', image: 'assets/images/team/alumni/Ph.D. Alumni/Dr. Saurabh Shah.jfif' },
        { name: 'Akshay Shinde', role: 'M.S. Alumnus', bio: 'Completed M.S. in cancer research.', linkedin: 'https://www.linkedin.com/in/akshay-shinde-978919156/', image: 'assets/images/team/alumni/M.S. Alumni/Akshay Shinde.png' },
        { name: 'Sajja Bhanu Prasad', role: 'M.S. Alumnus', bio: 'Completed M.S. in cancer research.', linkedin: 'https://www.linkedin.com/in/sajja-bhanu-prasad-/', image: 'assets/images/team/alumni/M.S. Alumni/Bhanu Prasad Sajja.png' },
        { name: 'Swapnil Shinde', role: 'M.S. Alumnus', bio: 'Completed M.S. in cancer research.', linkedin: 'https://www.linkedin.com/in/swapnil-shinde-7b5310289/', image: 'assets/images/team/alumni/M.S. Alumni/Swapnil Shinde.png' },
        { name: 'Niharika Puri', role: 'M.S. Alumnus', bio: 'Completed M.S. in cancer research.', linkedin: 'https://www.linkedin.com/in/niharika-puri-22691413b/', image: 'assets/images/team/alumni/M.S. Alumni/Niharika Puri.png' }
    ];

    const cancerSubgroups = {
        "Oral Cancer Research Group": ["Suraj Wagh", "Bishal Samadder"],
        "Lung Cancer Research Group": ["Vivek Phatale", "Shalini Shukla", "Prerna Shetty", "Annu Devi"]
    };

    function createMemberCard(member) {
        const initials = member.name.split(' ').map(n => n[0]).join('');
        return `
            <div class="flip-card" tabindex="0" style="--i: ${Math.random() * 10};">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        ${member.image ? `<img src="${encodeURI(member.image)}" alt="${member.name}" class="member-photo">` : `<div class="member-photo-placeholder" style="--initials: '${initials}';"></div>`}
                        <h3 class="member-name">${member.name}</h3>
                        <p class="member-group">${member.role}</p>
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

    const currentMembersGrid = document.getElementById('cancer-current-members');
    if(currentMembersGrid) currentMembersGrid.innerHTML = currentMembers.map(createMemberCard).join('');

    const alumniGrid = document.getElementById('cancer-alumni');
    if(alumniGrid) alumniGrid.innerHTML = alumni.map(createMemberCard).join('');

    const accordionContainer = document.getElementById('cancer-subgroups-accordion');
    if (accordionContainer) {
        let accordionHTML = '';
        for (const group in cancerSubgroups) {
            accordionHTML += `
                <div class="accordion-item">
                    <button class="accordion-header">${group}</button>
                    <div class="accordion-content">
                        <ul class="styled-list">
                            ${cancerSubgroups[group].map(name => `<li>${name}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }
        accordionContainer.innerHTML = accordionHTML;
    }

    // Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling;
            
            const isActive = accordionItem.classList.contains('active');

            if (!isActive) {
                accordionItem.classList.add('active');
                header.classList.add('active');
                
                const targetHeight = accordionContent.scrollHeight + 150; 
                accordionContent.style.maxHeight = targetHeight + 'px';
                
                setTimeout(() => {
                    if (accordionItem.classList.contains('active')) {
                        accordionContent.style.maxHeight = 'none';
                    }
                }, 400); 
            } else {
                if (accordionContent.style.maxHeight === 'none') {
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                    accordionContent.offsetHeight; 
                }
                
                accordionItem.classList.remove('active');
                header.classList.remove('active');
                setTimeout(() => {
                    accordionContent.style.maxHeight = '0';
                }, 10);
            }
        });
    });

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
        document.addEventListener('click', function(e) {
            const card = e.target.closest(selector);
            if (!card) return;

            if (e.target.closest('a, button')) {
                return;
            }

            card.classList.add('card-clicked');
            setTimeout(() => {
                card.classList.remove('card-clicked');
            }, 600);
        });
    }

    applyClickGlowEffect('.flip-card');
});

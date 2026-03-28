document.addEventListener('DOMContentLoaded', () => {
    const currentMembers = [
        { name: 'Giriraj Pandey', role: 'Ph.D. Scholar', bio: 'Focused on smart drug delivery systems for glucose regulation.', linkedin: 'https://www.linkedin.com/in/giriraj-pandey-042720202/', image: 'assets/images/team/current members/Current Ph.D. Scholars/Giriraj Pandey .jpg' },
        { name: 'Tejaswini Kolipaka', role: 'Ph.D. Scholar', bio: 'Researching novel formulations for anti-diabetic agents.', linkedin: 'https://www.linkedin.com/in/tejaswini-kolipaka-864972213/', image: 'assets/images/team/current members/Current Ph.D. Scholars/Tejaswini Kolipaka.jpg' },
        { name: 'Ashish Kumar Singh', role: 'M.S. Scholar', bio: 'Developing novel systems for enhanced diabetes management.', linkedin: 'https://www.linkedin.com/in/aashish-kumar-singh-98a41529a/', image: 'assets/images/team/current members/Current M.S. Scholars/Ashish Kumar Singh.jpg' }
    ];

    const alumni = [
        { name: 'Noella Abraham', role: 'Alumnus', bio: 'Completed research on advanced delivery systems for metabolic disorders.', linkedin: 'https://www.linkedin.com/in/noella-a-43710016b/', image: 'assets/images/team/alumni/M.S. Alumni/Noella Abraham.png' },
        { name: 'Deelip Gaonkar', role: 'Alumnus', bio: 'Completed research on patient-centric, long-acting, and targeted therapies for diabetes.', linkedin: 'https://www.linkedin.com/in/deelip-gaonkar-a15b53256/', image: 'assets/images/team/alumni/M.S. Alumni/Deelip Gaonkar.png' },
        { name: 'Akshita Jain', role: 'Alumnus', bio: 'Completed research on novel formulations for anti-diabetic agents.', linkedin: 'https://www.linkedin.com/in/akshita-jain-743711134/', image: 'assets/images/team/alumni/M.S. Alumni/Akshita Jain.png' }
    ];

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

    const currentMembersGrid = document.getElementById('diabetes-current-members');
    if(currentMembersGrid) currentMembersGrid.innerHTML = currentMembers.map(createMemberCard).join('');

    const alumniGrid = document.getElementById('diabetes-alumni');
    if(alumniGrid) alumniGrid.innerHTML = alumni.map(createMemberCard).join('');

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

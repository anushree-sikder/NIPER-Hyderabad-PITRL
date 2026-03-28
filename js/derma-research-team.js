document.addEventListener('DOMContentLoaded', () => {
    const currentMembers = [
        { name: 'Pooja Kairnar', role: 'Ph.D. Scholar', bio: 'Innovating topical and transdermal drug delivery systems.', linkedin: 'https://www.linkedin.com/in/pooja-khairnar-05b959212/', image: 'assets/images/team/current members/Current Ph.D. Scholars/Pooja Kairnar.jpg' },
        { name: 'Ganesh Vambhurkar', role: 'Ph.D. Scholar', bio: 'Exploring nanocarriers for enhanced skin delivery.', linkedin: 'https://www.linkedin.com/in/ganesh-vambhurkar-3ba111154/', image: 'assets/images/team/current members/Current Ph.D. Scholars/Ganesh Vambhurkar.jpg' },
        { name: 'Aashi Srivastava', role: 'M.S. Scholar', bio: 'Innovating formulations for dermatological conditions.', linkedin: 'https://www.linkedin.com/in/aashi-srivastava1701/', image: 'assets/images/team/current members/Current M.S. Scholars/Aashi Srivastava .jpg' },
        { name: 'Pallavi Chaure', role: 'M.S. Scholar', bio: 'Developing novel topical formulations for skin diseases.', linkedin: 'https://www.linkedin.com/in/pallavi-chaure/', image: 'assets/images/team/current members/Current M.S. Scholars/Pallavi Chaure.jpg' }
    ];

    const alumni = [
        { name: 'Shweta Nene', role: 'Ph.D. Alumnus', bio: 'Completed Ph.D. with a focus on skin-targeted formulations.', linkedin: 'https://www.linkedin.com/in/shweta-nene-aa0235a4/', image: 'assets/images/team/alumni/Ph.D. Alumni/Dr. Shweta Nene.jpg' },
        { name: 'Harsha Jain', role: 'Ph.D. Alumnus', bio: 'Completed Ph.D. exploring novel drug delivery systems for dermatological conditions.', linkedin: 'https://www.linkedin.com/in/harsha-jain-ph-d-9759627a/', image: 'assets/images/team/alumni/Ph.D. Alumni/Dr. Harsha Jain.jfif' },
        { name: 'Aachal Hedaoo', role: 'M.S. Alumnus', bio: 'Completed M.S. in derma research.', linkedin: 'https://www.linkedin.com/in/aachal-hedaoo-973776249/', image: 'assets/images/team/alumni/M.S. Alumni/Aachal Hedaoo.png' },
        { name: 'Prajakta Sahane', role: 'M.S. Alumnus', bio: 'Completed M.S. in derma research.', linkedin: 'https://www.linkedin.com/in/prajakta-sahane-878345272/', image: 'assets/images/team/alumni/M.S. Alumni/Prajakta Sahane.png' }
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

    const currentMembersGrid = document.getElementById('derma-current-members');
    if(currentMembersGrid) currentMembersGrid.innerHTML = currentMembers.map(createMemberCard).join('');

    const alumniGrid = document.getElementById('derma-alumni');
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

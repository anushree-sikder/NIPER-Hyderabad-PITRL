document.addEventListener('DOMContentLoaded', () => {
    const currentMembers = [
        { name: 'Anupama Sikder', role: 'Ph.D. Scholar', bio: 'An exceptional all-rounder and academic topper, she engineers the future of mind medicine by designing nanotech-driven, brain-targeted delivery systems to conquer CNS disorders.', linkedin: 'https://www.linkedin.com/in/anupama-sikder-700295141/', image: 'assets/images/team/current members/Current Ph.D. Scholars/Anupama Sikder.jfif' },
        { name: 'Etikala Amulya', role: 'Ph.D. Scholar', bio: 'Investigating brain-targeted delivery systems for CNS disorders.', linkedin: 'https://www.linkedin.com/in/etikala-amulya-605a94172/', image: 'assets/images/team/current members/Current Ph.D. Scholars/Etikala Amulya.jpg' }
    ];

    const alumni = [
        { name: 'Mansi Negi', role: 'M.S. Alumnus', bio: 'Completed M.S. with a focus on neuro-nanotechnology.', linkedin: 'https://www.linkedin.com/in/mansi-negi-695413209/', image: 'assets/images/team/alumni/M.S. Alumni/Mansi Negi.png' },
        { name: 'Abhipsa Priyadarshinee', role: 'M.S. Alumnus', bio: 'Completed M.S. exploring novel drug delivery systems for neurodegenerative diseases.', linkedin: 'https://www.linkedin.com/in/abhipsa-priyadarshinee-464b81285/', image: 'assets/images/team/alumni/M.S. Alumni/Abhipsa Priyadarshinee.png' }
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

    const currentMembersGrid = document.getElementById('neuro-current-members');
    if (currentMembersGrid) currentMembersGrid.innerHTML = currentMembers.map(createMemberCard).join('');

    const alumniGrid = document.getElementById('neuro-alumni');
    if (alumniGrid) alumniGrid.innerHTML = alumni.map(createMemberCard).join('');

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

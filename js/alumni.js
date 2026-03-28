document.addEventListener('DOMContentLoaded', () => {
    const alumni = [
        { name: 'Dr. Paras Famta', degree: 'phd', group: 'Post-Doctoral Alumnus', linkedin: 'https://www.linkedin.com/in/paras-famta-87770810b/', image: 'assets/images/team/alumni/Ph.D. Alumni/Dr. Paras Famta.png' },
        { name: 'Dr. Harsha Jain', degree: 'phd', group: 'Derma Research Group', linkedin: 'https://www.linkedin.com/in/harsha-jain-ph-d-9759627a/', image: 'assets/images/team/alumni/Ph.D. Alumni/Dr. Harsha Jain.jfif' },
        { name: 'Dr. Shweta Nene', degree: 'phd', group: 'Derma Research Group', linkedin: 'https://www.linkedin.com/in/shweta-nene-aa0235a4/', image: 'assets/images/team/alumni/Ph.D. Alumni/Dr. Shweta Nene.jpg' },
        { name: 'Dr. Saurabh Shah', degree: 'phd', group: 'Cancer Research Group', linkedin: 'https://www.linkedin.com/in/saurabh-shah-990478152/', image: 'assets/images/team/alumni/Ph.D. Alumni/Dr. Saurabh Shah.jfif' },

        { name: 'Aditi Bhat', degree: 'ms', group: '', linkedin: 'https://www.linkedin.com/in/aditi-rajan-bhat/', image: 'assets/images/team/alumni/M.S. Alumni/Aditi Bhat.jfif' },
        { name: 'Srividya Atmakuri', degree: 'ms', group: '', linkedin: 'https://www.linkedin.com/in/srividya-atmakuri-01171997abc/', image: 'assets/images/team/alumni/M.S. Alumni/Srividya Atmakuri.jpg' },
        { name: 'Pratiksha Patil', degree: 'ms', group: '', linkedin: 'https://www.linkedin.com/in/pratikshapatil4561/', image: 'assets/images/team/alumni/M.S. Alumni/Pratiksha Patil.jpg' },
        { name: 'Deepkumar Bagasariya', degree: 'ms', group: '', linkedin: 'https://www.linkedin.com/in/deepbagasariya/', image: 'assets/images/team/alumni/M.S. Alumni/Deepkumar Bagasariya.jpg' },
        { name: 'Dr. Saurabh Shah', degree: 'ms', group: 'Cancer Research Group', linkedin: 'https://www.linkedin.com/in/saurabh-shah-990478152/', image: 'assets/images/team/alumni/Ph.D. Alumni/Dr. Saurabh Shah.jfif' },
        { name: 'Konda Singh Charan Kumar', degree: 'ms', group: '', linkedin: 'https://www.linkedin.com/in/konda-singh-charan-kumar-779401213/', image: 'assets/images/team/alumni/M.S. Alumni/Konda Singh Charan Kumar.jpg' },
        { name: 'Palak Chitlangya', degree: 'ms', group: '', linkedin: 'https://www.linkedin.com/in/palak-chitlangya-52737018a/', image: 'assets/images/team/alumni/M.S. Alumni/Palak Chitlangya.jpg' },
        { name: 'Rimsha Nooreen', degree: 'ms', group: '', linkedin: 'https://www.linkedin.com/in/rimsha-nooreen-6ab3701bb/', image: 'assets/images/team/alumni/M.S. Alumni/Rimsha Nooreen.jpg' },
        { name: 'Shivam Otavi', degree: 'ms', group: '', linkedin: 'https://www.linkedin.com/in/shivam-otavi-b72514210/', image: 'assets/images/team/alumni/M.S. Alumni/Shivam Otavi.png' },
        { name: 'Velpula Prasannanjaneyulu', degree: 'ms', group: '', linkedin: 'https://www.linkedin.com/in/prasannanjaneyulu-velpula-6b9746155/', image: 'assets/images/team/alumni/M.S. Alumni/Velpula Prasannanjaneyulu.png' },
        { name: 'Namitha Mohan', degree: 'ms', group: '', linkedin: 'https://www.linkedin.com/in/namitha-mohan-c-6b39b3193/', image: 'assets/images/team/alumni/M.S. Alumni/Namitha Mohan.png' },
        { name: 'Naitik Jain', degree: 'ms', group: '', linkedin: 'https://www.linkedin.com/in/jainnaitik/', image: 'assets/images/team/alumni/M.S. Alumni/Naitik Jain.png' },
        { name: 'Syed Shahrukh', degree: 'ms', group: '', linkedin: 'https://www.linkedin.com/in/syed-shahrukh-14a820255/', image: 'assets/images/team/alumni/M.S. Alumni/Syed Shahrukh.png' },
        { name: 'Subham Panigrahy', degree: 'ms', group: '', linkedin: 'https://www.linkedin.com/in/subham-panigrahy-7b864b240/', image: 'assets/images/team/alumni/M.S. Alumni/Subham Panigrahy.png' },
        { name: 'Vrushali Pathade', degree: 'ms', group: '', linkedin: 'https://www.linkedin.com/in/vrushali-pathade-67a2a3281/', image: 'assets/images/team/alumni/M.S. Alumni/Vrushali Pathade.png' },
        { name: 'Shreya Ratnam', degree: 'ms', group: '', linkedin: 'https://www.linkedin.com/in/shreya-ratnam-4590711b3/', image: 'assets/images/team/alumni/M.S. Alumni/Shreya Ratnam.png' },
        { name: 'Aastha Singh', degree: 'ms', group: '', linkedin: 'https://www.linkedin.com/in/555aasthasingh/', image: 'assets/images/team/alumni/M.S. Alumni/Aastha Singh.png' },
        { name: 'Akshay Shinde', degree: 'ms', group: 'Cancer Research Group', linkedin: 'https://www.linkedin.com/in/akshay-shinde-978919156/', image: 'assets/images/team/alumni/M.S. Alumni/Akshay Shinde.png' },
        { name: 'Bhanu Prasad Sajja', degree: 'ms', group: 'Cancer Research Group', linkedin: 'https://www.linkedin.com/in/sajja-bhanu-prasad-/', image: 'assets/images/team/alumni/M.S. Alumni/Bhanu Prasad Sajja.png' },
        { name: 'Aachal Hedaoo', degree: 'ms', group: 'Derma Research Group', linkedin: 'https://www.linkedin.com/in/aachal-hedaoo-973776249/', image: 'assets/images/team/alumni/M.S. Alumni/Aachal Hedaoo.png' },
        { name: 'Noella Abraham', degree: 'ms', group: 'Diabetes Research Group', linkedin: 'https://www.linkedin.com/in/noella-a-43710016b/', image: 'assets/images/team/alumni/M.S. Alumni/Noella Abraham.png' },
        { name: 'Mansi Negi', degree: 'ms', group: 'Neuro Research Group', linkedin: 'https://www.linkedin.com/in/mansi-negi-695413209/', image: 'assets/images/team/alumni/M.S. Alumni/Mansi Negi.png' },
        { name: 'Deelip Gaonkar', degree: 'ms', group: 'Diabetes Research Group', linkedin: 'https://www.linkedin.com/in/deelip-gaonkar-a15b53256/', image: 'assets/images/team/alumni/M.S. Alumni/Deelip Gaonkar.png' },
        { name: 'Swapnil Shinde', degree: 'ms', group: 'Cancer Research Group', linkedin: 'https://www.linkedin.com/in/swapnil-shinde-7b5310289/', image: 'assets/images/team/alumni/M.S. Alumni/Swapnil Shinde.png' },
        { name: 'Akshita Jain', degree: 'ms', group: 'Diabetes Research Group', linkedin: 'https://www.linkedin.com/in/akshita-jain-743711134/', image: 'assets/images/team/alumni/M.S. Alumni/Akshita Jain.png' },
        { name: 'Niharika Puri', degree: 'ms', group: 'Cancer Research Group', linkedin: 'https://www.linkedin.com/in/niharika-puri-22691413b/', image: 'assets/images/team/alumni/M.S. Alumni/Niharika Puri.png' },
        { name: 'Prajakta Sahane', degree: 'ms', group: 'Derma Research Group', linkedin: 'https://www.linkedin.com/in/prajakta-sahane-878345272/', image: 'assets/images/team/alumni/M.S. Alumni/Prajakta Sahane.png' },
        { name: 'Abhipsa Priyadarshinee', degree: 'ms', group: 'Neuro Research Group', linkedin: 'https://www.linkedin.com/in/abhipsa-priyadarshinee-464b81285/', image: 'assets/images/team/alumni/M.S. Alumni/Abhipsa Priyadarshinee.png' },
        { name: 'Ramesh Joga', degree: 'ms', group: '', linkedin: 'https://www.linkedin.com/in/ramesh-joga-81a6161a6/', image: 'assets/images/team/alumni/M.S. Alumni/Ramesh Joga.jpg' },
        { name: 'Divya Goud', degree: 'ms', group: '', linkedin: '' },
        { name: 'Harshita Dalvi', degree: 'ms', group: '', linkedin: 'https://www.linkedin.com/in/harshitadalvi/', image: 'assets/images/team/alumni/M.S. Alumni/Harshita Dalvi.png' },
    ];

    const phdAlumniGrid = document.getElementById('phd-alumni-grid');
    const msAlumniGrid = document.getElementById('ms-alumni-grid');

    function createAlumniCard(alumnus, index) {
        const initials = alumnus.name.split(' ').map(n => n[0]).join('');
        return `
            <div class="flip-card" data-degree="${alumnus.degree}" data-name="${alumnus.name}" data-group="${alumnus.group}" tabindex="0" style="--i: ${index};">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        ${alumnus.image ? `<img src="${encodeURI(alumnus.image)}" alt="${alumnus.name}" class="member-photo">` : `<div class="member-photo-placeholder" style="--initials: '${initials}';"></div>`}
                        <h3 class="member-name">${alumnus.name}</h3>
                        <p class="member-group">${alumnus.group || (alumnus.degree.toUpperCase() + ' Alumnus')}</p>
                        ${alumnus.linkedin ? `<a href="${alumnus.linkedin}" target="_blank" class="linkedin-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 3.5zM5 8H0v16h5V8zm8 0H8v16h5v-8.34c0-1.92.89-3.36 2.65-3.36 1.55 0 2.35 1.04 2.35 3.36V24h5V14.5c0-4.7-2.5-7-5.6-7-2.52 0-3.98 1.4-4.65 2.75L13 8z"></path></svg></a>` : ''}
                    </div>
                    <div class="flip-card-back">
                        <h3>${alumnus.name}</h3>
                        <p class="member-bio">A valued member of our alumni network, contributing to the field of pharmaceutical sciences.</p>
                        ${alumnus.linkedin ? `<a href="${alumnus.linkedin}" target="_blank" class="btn btn-secondary btn-small">View LinkedIn</a>` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    function renderAlumniByDegree() {
        if (phdAlumniGrid) {
            const phdAlumni = alumni.filter(a => a.degree === 'phd');
            phdAlumniGrid.innerHTML = phdAlumni.map(createAlumniCard).join('');
        }
        if (msAlumniGrid) {
            const msAlumni = alumni.filter(a => a.degree === 'ms');
            msAlumniGrid.innerHTML = msAlumni.map(createAlumniCard).join('');
        }
    }

    renderAlumniByDegree();

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

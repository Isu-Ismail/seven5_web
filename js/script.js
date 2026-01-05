/* js/script.js */

document.addEventListener('DOMContentLoaded', () => {

    /* --- THEME TOGGLE LOGIC --- */
    const themeBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    // 1. Check Local Storage
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlEl.setAttribute('data-theme', savedTheme);

    // 2. Toggle Event
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            htmlEl.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    /* --- RENDER DATA --- */
    
    // 1. Render Navbar
    const navList = document.getElementById('nav-list');
    if (navList && typeof appData !== 'undefined') {
        appData.navbar.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = item.name;
            a.href = item.link;
            // The CSS class .nav-btn is applied here if type is button
            if(item.type === 'button') a.className = "nav-btn";
            li.appendChild(a);
            navList.appendChild(li);
        });
    }

    // 2. Render Hero
    const brandText = document.getElementById('brand-text');
    if(brandText && typeof appData !== 'undefined') brandText.textContent = appData.hero.appName;

    const heroHead = document.getElementById('hero-head');
    if (heroHead && typeof appData !== 'undefined') {
        heroHead.textContent = appData.hero.tagline;
        document.getElementById('hero-sub').textContent = appData.hero.subHeadline;
        document.getElementById('hero-main-img').src = appData.hero.heroImage;

        // Download Buttons
        const dlGroup = document.getElementById('dl-group');
        const createBtn = (data, cls) => {
            const a = document.createElement('a');
            a.className = `store-btn ${cls || ''}`;
            a.href = data.link;
            // Basic SVG/Icon placeholder rendering
            a.innerHTML = `<span style="font-size:1.2em; display:flex;">${data.icon}</span> <span>${data.text}</span>`;
            return a;
        };
        const dls = appData.hero.downloads;
        dlGroup.appendChild(createBtn(dls.playStore));
        dlGroup.appendChild(createBtn(dls.appStore));
        dlGroup.appendChild(createBtn(dls.apk, 'apk'));

        // Tech Strip
        const techContainer = document.getElementById('tech-strip');
        appData.techStack.forEach(tech => {
            const img = document.createElement('img');
            img.src = tech.img;
            img.title = tech.name;
            techContainer.appendChild(img);
        });
    }

    // 3. Render Features
    const featGrid = document.getElementById('feature-grid');
    if (featGrid && typeof appData !== 'undefined') {
        appData.features.forEach((feat, index) => {
            const div = document.createElement('div');
            div.className = 'feature-card';
            div.innerHTML = `
                <div class="f-icon" style="background:${feat.color || 'var(--bg-body)'}">
                    ${index + 1}
                </div>
                <h3>${feat.title}</h3>
                <p>${feat.desc}</p>
            `;
            featGrid.appendChild(div);
        });
    }

    // 4. Render Screenshots
    const ssGrid = document.getElementById('ss-grid');
    if (ssGrid && typeof appData !== 'undefined') {
        appData.screenshots.forEach(ss => {
            const div = document.createElement('div');
            div.className = 'ss-card';
            div.innerHTML = `
                <div class="ss-img-container">
                    <img src="${ss.url}" alt="${ss.caption}">
                </div>
                <div class="ss-caption">${ss.caption}</div>
            `;
            ssGrid.appendChild(div);
        });
    }

    // 5. Render Contact Section
    const contactHead = document.getElementById('contact-head');
    if(contactHead && typeof appData !== 'undefined') {
        contactHead.textContent = appData.contact.heading;
        document.getElementById('contact-sub').textContent = appData.contact.subHeading;
        
        document.getElementById('contact-email').textContent = appData.contact.email;
        document.getElementById('contact-loc').textContent = appData.contact.location;
        
        document.getElementById('footer-text').textContent = appData.policy.footer;
    }

    /* --- BURGER MENU LOGIC --- */
    const hamburger = document.getElementById('hamburger');
    const navWrapper = document.getElementById('nav-wrapper'); // Matches HTML ID

    if (hamburger && navWrapper) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navWrapper.classList.toggle('active'); // Slides the drawer in/out
        });

        // Close menu when a link inside it is clicked
        navWrapper.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navWrapper.classList.remove('active');
            });
        });
    }
const contactForm = document.getElementById('contact-form');

    if (contactForm && typeof appData !== 'undefined') {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop the page from reloading

            // 1. Get values from the inputs
            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const message = document.getElementById('form-msg').value;

            // 2. destination email (from your data.js)
            const destEmail = appData.contact.email;

            // 3. Construct the mailto link
            const subject = `Inquiry from ${name} (Seven5)`;
            const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;

            // 4. Open Email Client
            window.location.href = `mailto:${destEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
        });
    }
});
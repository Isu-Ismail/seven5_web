/* js/data.js */

const appData = {
    navbar: [
        { name: "Home", link: "index.html", type: "text" },
        { name: "Features", link: "index.html#features", type: "text" },
        { name: "Screenshots", link: "index.html#screenshots", type: "text" },
        { name: "Contact", link: "index.html#contact", type: "text" }, // <--- Added this
        { name: "Privacy", link: "privacy.html", type: "text" },
        { name: "Download", link: "index.html#home", type: "button" }
    ],
    hero: {
        appName: "Seven5",
        tagline: "Start to organize.",
        subHeadline: "The offline-first student attendance tracker. Secure, local, and always available on your device.",
        heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1470",
        downloads: {
            playStore: { text: "Google Play", link: "#", icon: "▶" },
            appStore: { text: "App Store", link: "#", icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.7C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.96,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" /></svg>` },
            apk: { text: "Download APK", link: "#", icon: "⬇" }
        }
    },
    techStack: [
        { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Dart", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        { name: "Android", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
        { name: "Drive", img: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg" }
    ],
    features: [
        { title: "Offline First", desc: "No internet? No problem. Your data lives locally on your device.", color: "var(--accent-1)" },
        { title: "Drive Sync", desc: "One-tap backup to your personal Google Drive for safety.", color: "var(--accent-2)" },
        { title: "Privacy Focused", desc: "Zero tracking. No backend servers. You own your data.", color: "var(--accent-3)" }
    ],
    screenshots: [
        { url: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=800", caption: "Dashboard Overview" },
        { url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800", caption: "Mark Attendance" },
        { url: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=800", caption: "Export Reports" }
    ],
    contact: {
        heading: "Get in touch",
        subHeading: "We are open to new features, creative ideas, or opportunities to make Seven5 better.",
        email: "seven5.contact.help@gmail.com",
        location: "Chennai, India"
    },
    policy: {
        lastUpdated: "January 2026",
        intro: "This Privacy Policy describes how <strong>Seven5</strong> handles student attendance data. This app is designed to be 'Offline-First' to ensure your privacy.",
        sections: [
            {
                title: "1. Data Collection & User Accounts",
                content: "The app collects student names and attendance records that you manually input. This data is stored <strong>locally</strong> on your device. <br><br><strong>We do not save any user personal data.</strong> There is no account creation with us; you only authorize Google Drive access so the app can save backups to your own personal cloud."
            },
            {
                title: "2. Google Drive Integration",
                content: "The app offers an optional backup feature using Google Drive. If enabled: <ul style='margin-left:20px; margin-top:10px;'><li>The app uploads your attendance database to a private folder in your personal Google Drive.</li><li>The app only accesses the specific files it creates (using the <code>drive.appdata</code> scope). It cannot see your photos, documents, or other Drive files.</li></ul>"
            },
            {
                title: "3. Data Sharing",
                content: "We do not have backend servers. Your data is never sent to us or any third parties. Your data remains between your device and your personal Google Drive account."
            },
            {
                title: "4. Data Deletion",
                content: "You can delete your data at any time by: <ul style='margin-left:20px; margin-top:10px;'><li>Clearing the app storage in Android Settings.</li><li>Deleting the backup file within the app or from your Google Drive 'Manage Apps' settings.</li></ul>"
            },
            {
                title: "5. Contact",
                content: "If you have questions, contact us at: <strong>seven5.contact.help@gmail.com</strong>"
            }
        ],
        footer: "© 2026 Seven5. Built for the Google Play Store."
    }
};
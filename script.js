const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

const projectCards = document.querySelectorAll(".project-card");
const projectDetails = document.getElementById("project-details");

// Project Selection Code

const projectData = {
    "bds-equipment": {
        title: "BDS Equipment",
        content: `
            <p><strong>Overview:</strong> Add your BDS Equipment project summary here.</p>
            <p><strong>Scope:</strong> Explain the system, equipment, or engineering work involved.</p>
            <p><strong>Key Contributions:</strong> List your design, testing, commissioning, software, or control work.</p>
            <p><strong>Technologies:</strong> Add PLC/DCS/software/hardware/tools used.</p>
        `
    },
    "bio-analytics": {
        title: "Bio Analytics",
        content: `
            <p><strong>Overview:</strong> Add your Bio Analytics project summary here.</p>
            <p><strong>Scope:</strong> Describe the purpose of the project and your role.</p>
            <p><strong>Key Contributions:</strong> Explain what you designed, built, or improved.</p>
            <p><strong>Technologies:</strong> List the relevant tools, systems, and platforms used.</p>
        `
    },
    "contractor-village": {
        title: "Contractor Village",
        content: `
            <p><strong>Overview:</strong> Add your Contractor Village project summary here.</p>
            <p><strong>Scope:</strong> Describe the project objectives and site requirements.</p>
            <p><strong>Key Contributions:</strong> Add your responsibilities and technical input.</p>
            <p><strong>Technologies:</strong> Include electrical, controls, software, or design tools used.</p>
        `
    },
    "cooling-towers-mcc": {
        title: "Cooling Towers & MCC",
        content: `
            <p><strong>Overview:</strong> Add your Cooling Towers & MCC project summary here.</p>
            <p><strong>Scope:</strong> Outline the upgrade, rebuild, retrofit, or controls scope.</p>
            <p><strong>Key Contributions:</strong> Describe project management, engineering, logic, or commissioning work.</p>
            <p><strong>Technologies:</strong> Add relevant systems, switchboards, DCS/PLC platforms, and documentation.</p>
        `
    },
    "security-access": {
        title: "Security Access",
        content: `
            <p><strong>Overview:</strong> Add your Security Access project summary here.</p>
            <p><strong>Scope:</strong> Describe the access control or integrated security system.</p>
            <p><strong>Key Contributions:</strong> Include design, installation coordination, programming, or testing.</p>
            <p><strong>Technologies:</strong> List controllers, readers, networks, software, and infrastructure.</p>
        `
    },
    "control-systems-io": {
        title: "Control Systems I/O",
        content: `
            <p><strong>Overview:</strong> Add your Control Systems I/O project summary here.</p>
            <p><strong>Scope:</strong> Describe the control system modifications or integration work.</p>
            <p><strong>Key Contributions:</strong> Add design, point mapping, testing, logic changes, or fault finding.</p>
            <p><strong>Technologies:</strong> Include DCS/PLC platforms, instruments, panels, and communication systems.</p>
        `
    },
    "website-development": {
        title: "Website Development",
        content: `
            <p><strong>Overview:</strong> Add your Website Development project summary here.</p>
            <p><strong>Scope:</strong> Describe the website purpose and structure.</p>
            <p><strong>Key Contributions:</strong> Include front-end design, layout, JavaScript functionality, and deployment.</p>
            <p><strong>Technologies:</strong> HTML, CSS, JavaScript, GitHub Pages.</p>
        `
    }
};

let activeProject = null;

projectCards.forEach((card) => {
    card.addEventListener("click", () => {
        const projectKey = card.dataset.project;

        if (activeProject === projectKey) {
            projectDetails.classList.add("hidden");
            card.classList.remove("active");
            activeProject = null;
            return;
        }

        projectCards.forEach((c) => c.classList.remove("active"));
        card.classList.add("active");

        projectDetails.innerHTML = `
            <h3>${projectData[projectKey].title}</h3>
            ${projectData[projectKey].content}
        `;

        projectDetails.classList.remove("hidden");
        activeProject = projectKey;

        projectDetails.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Slideshow Coding

const images = [
    "Photos/Travel Shots/IMG_5344.jpg",
    "Photos/Travel Shots/IMG_5353.jpg",
    "Photos/Travel Shots/IMG_7512.jpg",
    "Photos/Travel Shots/IMG_7827.jpg",
    "Photos/Travel Shots/IMG_7865.jpg",
    "Photos/Travel Shots/SZJJ0705.JPG",
    "Photos/Travel Shots/XPMY8925.JPG",
    "Photos/Travel Shots/IMG_5250.JPG"
];

let index = 0;

const slideshow = document.getElementById("slideshow-image");

function changeImage() {

    slideshow.style.opacity = 0;

    setTimeout(() => {

        index = (index + 1) % images.length;
        slideshow.src = images[index];
        slideshow.style.opacity = 1;

    }, 700);

}

setInterval(changeImage, 5000);
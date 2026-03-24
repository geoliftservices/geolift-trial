document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const toggle = document.getElementById("toggle");
    const overlay = document.getElementById("overlay");
    const header = document.getElementById("header");

    // Toggle Mobile Menu
    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
        toggle.classList.toggle("active");
    });

    // Close menu on overlay click
    overlay.addEventListener("click", () => {
        menu.classList.remove("active");
        overlay.classList.remove("active");
        toggle.classList.remove("active");
    });

    // Header scroll effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Mobile Dropdown
    document.querySelectorAll(".dropbtn").forEach(btn => {
        btn.addEventListener("click", function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                this.parentElement.classList.toggle("active");
            }
        });
    });
});

// About Toggle Function
function toggleAbout() {
    const content = document.getElementById("aboutFull");
    const btn = document.querySelector(".about-cta");

    if (content.style.display === "block") {
        content.style.display = "none";
        btn.innerText = "Read More";
    } else {
        content.style.display = "block";
        btn.innerText = "Read Less";
        content.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

// Form Submission (Placeholder)
function sendAudit(event) {
    event.preventDefault();
    alert("Request received! We will contact you shortly.");
}

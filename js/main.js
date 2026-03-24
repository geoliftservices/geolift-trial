const menu = document.getElementById("menu");
const toggle = document.getElementById("toggle");
const overlay = document.getElementById("overlay");
const header = document.getElementById("header");

// Mobile Menu Toggle
if (toggle) {
    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
        toggle.classList.toggle("active");
    });
}

// Close on overlay click
if (overlay) {
    overlay.addEventListener("click", () => {
        menu.classList.remove("active");
        overlay.classList.remove("active");
        toggle.classList.remove("active");
    });
}

// Close on link click
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", (e) => {
        // If it's dropdown button, don't close menu
        if (link.classList.contains("dropbtn")) {
            e.preventDefault();
            return;
        }
        // Close only for normal links
        menu.classList.remove("active");
        overlay.classList.remove("active");
        toggle.classList.remove("active");
    });
});

// Scroll effect for header
window.addEventListener("scroll", function() {
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }
});

// Mobile Dropdown Toggle
document.querySelectorAll(".dropbtn").forEach(btn => {
    btn.addEventListener("click", function(e) {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            this.parentElement.classList.toggle("active");
        }
    });
});

// About Section "Read More" Toggle
function toggleAbout() {
    const content = document.getElementById("aboutFull");
    const btn = document.querySelector(".about-cta");

    if (content.style.display === "block") {
        content.style.display = "none";
        btn.innerText = "Read More";
    } else {
        content.style.display = "block";
        btn.innerText = "Read Less";

        // scroll to new content
        setTimeout(function() {
            content.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 100);
    }
}

// Counters Intersection Observer
const counters = document.querySelectorAll(".counter");
const yearCounters = document.querySelectorAll(".counter-year");

if (counters.length > 0 || yearCounters.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                // Normal counters
                if (entry.target.classList.contains("counter")) {
                    let counter = entry.target;
                    let target = +counter.dataset.target;
                    let count = 0;
                    let step = target / 120;

                    function update() {
                        count += step;
                        if (count < target) {
                            counter.innerText = Math.ceil(count);
                            requestAnimationFrame(update);
                        } else {
                            counter.innerText = target + "+";
                        }
                    }
                    update();
                }

                // Year counters
                if (entry.target.classList.contains("counter-year")) {
                    let counter = entry.target;
                    let start = +counter.dataset.start;
                    let end = +counter.dataset.end;
                    let count = start;

                    function updateYear() {
                        counter.innerText = count;
                        if (count > end) {
                            count--;
                            setTimeout(updateYear, 120);
                        }
                    }
                    updateYear();
                }
            }
        });
    }, { threshold: 0.6 });

    counters.forEach(c => observer.observe(c));
    yearCounters.forEach(c => observer.observe(c));
}

// Form Submission Action (Prevent Default refresh)
function sendAudit(event) {
    event.preventDefault();
    
    // Add your form submission logic here
    alert("Audit requested!");
}

<!-- FLOATING BUTTON -->

<div class="floating-audit-btn" onclick="openAuditForm()">
Free GBP Audit
</div>


function openAuditForm(){

selectedPlan = "";   // reset plan

document.getElementById("auditPopup").style.display="flex";

}

function closeAuditForm(){
document.getElementById("auditPopup").style.display="none";
}

window.onclick=function(event){
let popup=document.getElementById("auditPopup");
if(event.target==popup){
popup.style.display="none";
}
}

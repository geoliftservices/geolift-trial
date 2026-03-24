// MENU
const menu = document.getElementById("menu");
const toggle = document.getElementById("toggle");
const overlay = document.getElementById("overlay");
const header = document.getElementById("header");

if(toggle){
toggle.addEventListener("click", ()=>{
menu.classList.toggle("active");
overlay.classList.toggle("active");
toggle.classList.toggle("active");
});
}

// SCROLL HEADER
window.addEventListener("scroll", function(){
if(window.scrollY > 50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}
});

// FAQ
document.querySelectorAll(".faq-question").forEach(item=>{
item.addEventListener("click",()=>{
item.parentElement.classList.toggle("active");
});
});

// ABOUT
function toggleAbout(){
const content = document.getElementById("aboutFull");
const btn = document.querySelector(".about-cta");

if(content.style.display === "block"){
content.style.display = "none";
btn.innerText = "Read More";
}else{
content.style.display = "block";
btn.innerText = "Read Less";
}
}

// FEATURES
function toggleFeatures(btn){
let card = btn.closest(".service-card");
let features = card.querySelector(".more-features");

if(features.style.display==="block"){
features.style.display="none";
btn.textContent="+ View More Features";
}else{
features.style.display="block";
btn.textContent="Hide Features";
}
}

// TESTIMONIAL
const testimonials = document.querySelectorAll(".testimonial-card");
const dots = document.querySelectorAll(".testimonial-dot");

let current = 0;

function showTestimonial(index){
testimonials.forEach((card,i)=>{
card.classList.remove("active");
dots[i].classList.remove("active");
});
testimonials[index].classList.add("active");
dots[index].classList.add("active");
current = index;
}

dots.forEach((dot,i)=>{
dot.addEventListener("click",()=> showTestimonial(i));
});

setInterval(()=>{
current = (current + 1) % testimonials.length;
showTestimonial(current);
},5000);

// AUDIT FORM
function sendAudit(e){
e.preventDefault();

let name = document.getElementById("h_name").value;
let phone = document.getElementById("h_phone").value;

let message = `Name: ${name}%0APhone: ${phone}`;

window.open(`https://wa.me/919477469499?text=${message}`, "_blank");
}

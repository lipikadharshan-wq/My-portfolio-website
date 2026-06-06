// Smooth scrolling

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Typing Effect

const text = "Freelancer | AI Website Creator | Future Software Engineer";

let index = 0;

function typeWriter() {
    const typingElement = document.getElementById("typing");

    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 70);
    }
}

window.onload = typeWriter;


// Reveal Animation

const revealElements = document.querySelectorAll(
    ".card, .education-box, .mark-card, .skill, .project-card, .contact-card"
);

function reveal() {
    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });
}

window.addEventListener("scroll", reveal);
reveal();

// Active Menu Highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// Scroll To Top Button

const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:20px;
right:20px; 
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#5bc0ff;
font-size:22px;
font-weight:bold;
cursor:pointer;
display:none;
z-index:999;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// Welcome Message

setTimeout(() => {
    alert("Welcome to Lipika's Professional Portfolio Website");
}, 1000);



/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("open");

    });

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

document.querySelectorAll("nav a").forEach((link) => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("open");
        }

    });

});


/* =========================================
   CURRENT YEAR
========================================= */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* =========================================
   TYPING EFFECT
========================================= */

const typingText = document.getElementById("typingText");

const words = [
    "Java",
    "Spring Boot",
    "Web Development",
    "Database"
];

let wordIndex = 0;
let charIndex = 0;

let deleting = false;


function typeEffect() {

    if (!typingText) {
        return;
    }


    const currentWord = words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;


        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1300);

            return;
        }


    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }


    const speed = deleting ? 55 : 100;

    setTimeout(typeEffect, speed);

}


typeEffect();


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (!navbar) {
        return;
    }


    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   BACK TO TOP BUTTON
========================================= */

const backToTop =
    document.createElement("button");


backToTop.className = "back-to-top";

backToTop.setAttribute(
    "aria-label",
    "Back to top"
);


backToTop.innerHTML =
    '<i class="fas fa-arrow-up"></i>';


document.body.appendChild(backToTop);


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================
   PROJECT / CARD STAGGER ANIMATION
========================================= */

const cards =
    document.querySelectorAll(
        ".quick-card"
    );


cards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 100}ms`;

});
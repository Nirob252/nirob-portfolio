/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");


if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("open");

        menuBtn.classList.toggle("open");


        const isOpen =
            nav.classList.contains("open");


        menuBtn.setAttribute(
            "aria-expanded",
            isOpen
        );


        menuBtn.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

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

        if (menuBtn) {

            menuBtn.classList.remove("open");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            menuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

});


/* =========================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener("click", (event) => {

    if (!nav || !menuBtn) {
        return;
    }


    const clickedInsideNav =
        nav.contains(event.target);

    const clickedMenuButton =
        menuBtn.contains(event.target);


    if (
        !clickedInsideNav &&
        !clickedMenuButton
    ) {

        nav.classList.remove("open");

        menuBtn.classList.remove("open");

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});


/* =========================================
   CURRENT YEAR
========================================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================
   TYPING EFFECT
========================================= */

const typingText =
    document.getElementById("typingText");


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


    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1300
            );

            return;

        }

    }

    else {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;


            if (
                wordIndex >=
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    const speed =
        deleting
            ? 55
            : 100;


    setTimeout(
        typeEffect,
        speed
    );

}


typeEffect();


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 40) {

            navbar.classList.add(
                "scrolled"
            );

        }

        else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

}

else {

    revealElements.forEach(
        (element) => {

            element.classList.add(
                "visible"
            );

        }
    );

}


/* =========================================
   BACK TO TOP BUTTON
========================================= */

const backToTop =
    document.createElement(
        "button"
    );


backToTop.className =
    "back-to-top";


backToTop.setAttribute(
    "aria-label",
    "Back to top"
);


backToTop.innerHTML =
    '<i class="fas fa-arrow-up"></i>';


document.body.appendChild(
    backToTop
);


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            backToTop.classList.add(
                "show"
            );

        }

        else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================
   CARD STAGGER ANIMATION
========================================= */

const cards =
    document.querySelectorAll(
        ".quick-card"
    );


cards.forEach(
    (card, index) => {

        card.style.transitionDelay =
            `${index * 100}ms`;

    }
);

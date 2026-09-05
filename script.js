// =========================================================
// KASHIERK LANDING PAGE SCRIPT
// =========================================================

// =========================================================
// SLIDER
// =========================================================

const slider =
document.getElementById("slider");

let currentSlide = 0;

const slides =
slider.querySelectorAll("img");

const totalSlides =
slides.length;

// تغيير تلقائي للصور

setInterval(() => {

    currentSlide++;

    if (currentSlide >= totalSlides) {

        currentSlide = 0;
    }

    updateSlider();

}, 3000);

// تحديث السلايدر

function updateSlider() {

    slider.style.transform =
    `translateX(${currentSlide * 100}%)`;
}

// =========================================================
// HEADER EFFECT
// =========================================================

const header =
document.querySelector(".main-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.background =
        "rgba(255,255,255,0.98)";

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.05)";

    }

    else {

        header.style.background =
        "rgba(255,255,255,0.92)";

        header.style.boxShadow =
        "none";
    }

});

// =========================================================
// REVEAL ANIMATION
// =========================================================

const revealItems =
document.querySelectorAll(
`
.feature-card,
.workflow-card,
.business-card,
.about-box
`
);

const observer =
new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

revealItems.forEach((item) => {

    item.classList.add("hidden");

    observer.observe(item);

});

// =========================================================
// MOBILE TOUCH SUPPORT
// =========================================================

let startX = 0;
let endX = 0;

const phoneScreen =
document.querySelector(".screen");

phoneScreen.addEventListener(
"touchstart",
(e) => {

    startX = e.touches[0].clientX;

});

phoneScreen.addEventListener(
"touchend",
(e) => {

    endX = e.changedTouches[0].clientX;

    handleSwipe();

});

function handleSwipe() {

    // سحب لليسار

    if (startX - endX > 50) {

        currentSlide++;

        if (currentSlide >= totalSlides) {

            currentSlide = 0;
        }
    }

    // سحب لليمين

    else if (endX - startX > 50) {

        currentSlide--;

        if (currentSlide < 0) {

            currentSlide =
            totalSlides - 1;
        }
    }

    updateSlider();
}

// =========================================================
// SMOOTH BUTTON EFFECT
// =========================================================

const buttons =
document.querySelectorAll(
".btn-primary, .btn-download-big"
);

buttons.forEach((button) => {

    button.addEventListener(
    "mouseenter",
    () => {

        button.style.transform =
        "translateY(-2px)";
    });

    button.addEventListener(
    "mouseleave",
    () => {

        button.style.transform =
        "translateY(0)";
    });

});

// =========================================================
// PARALLAX EFFECT
// =========================================================

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    const phone =
    document.querySelector(".phone-container");

    phone.style.transform =
    `translateY(${scrollY * 0.03}px)`;
});

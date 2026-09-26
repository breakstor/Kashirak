// Kafi landing page interactions
(() => {
    const slider = document.getElementById("slider");
    const phoneScreen = document.querySelector(".screen");
    const header = document.querySelector(".main-header");
    const phone = document.querySelector(".phone-container");

    // Screenshot carousel
    if (slider) {
        const slides = Array.from(slider.querySelectorAll("img"));
        let currentSlide = 0;
        let startX = 0;
        let endX = 0;
        const totalSlides = slides.length;

        function updateSlider() {
            slider.style.transform = `translateX(${currentSlide * 100}%)`;
        }

        if (totalSlides > 1) {
            window.setInterval(() => {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlider();
            }, 3500);

            if (phoneScreen) {
                phoneScreen.addEventListener("touchstart", (event) => {
                    startX = event.touches[0].clientX;
                }, { passive: true });

                phoneScreen.addEventListener("touchend", (event) => {
                    endX = event.changedTouches[0].clientX;
                    const distance = startX - endX;
                    if (Math.abs(distance) > 50) {
                        currentSlide = distance > 0
                            ? (currentSlide + 1) % totalSlides
                            : (currentSlide - 1 + totalSlides) % totalSlides;
                        updateSlider();
                    }
                }, { passive: true });
            }
        }
    }

    // Header shadow after scrolling
    function updateHeader() {
        if (!header) return;
        header.classList.toggle("is-scrolled", window.scrollY > 40);
        header.style.boxShadow = window.scrollY > 40
            ? "0 10px 30px rgba(0,0,0,.06)"
            : "none";
    }
    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();

    // Reveal content as it enters the viewport
    const revealItems = document.querySelectorAll(
        ".service-card, .business-card, .intro-card, .store-panel"
    );
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealItems.forEach((item) => {
            item.classList.add("hidden");
            observer.observe(item);
        });
    }

    // Subtle hero phone movement on desktop only
    let ticking = false;
    window.addEventListener("scroll", () => {
        if (ticking || window.matchMedia("(max-width: 900px)").matches || !phone) return;
        ticking = true;
        window.requestAnimationFrame(() => {
            phone.style.translate = `0 ${Math.min(window.scrollY * 0.025, 18)}px`;
            ticking = false;
        });
    }, { passive: true });
})();

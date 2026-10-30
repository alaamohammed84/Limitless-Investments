// ================= HOME HERO SLIDER =================

const slides = document.querySelectorAll(".home-slide");
const nextBtn = document.querySelector(".home-next");
const prevBtn = document.querySelector(".home-prev");
const dots = document.querySelectorAll(".home-dot");

let currentSlide = 0;

function showSlide(index) {
    if (!slides.length) return;

    slides[currentSlide]?.classList.remove("active");
    dots[currentSlide]?.classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide]?.classList.add("active");
}

nextBtn?.addEventListener("click", () => {
    showSlide(currentSlide + 1);
});

prevBtn?.addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
    });
});

if (slides.length > 1) {
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000);
}


// ================= MOBILE NAVIGATION =================

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navPanel = document.querySelector("#primary-navigation");

    if (!menuToggle || !navPanel) {
        console.error("Mobile menu elements were not found.");
        return;
    }

    function toggleMenu() {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        navPanel.classList.toggle("is-open", !isOpen);
    }

    menuToggle.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        toggleMenu();
    });

    navPanel.addEventListener("click", function (event) {
        const link = event.target.closest("a");

        if (!link) return;

        if (
            link.classList.contains("projects-menu-link") &&
            window.innerWidth <= 1000
        ) {
            event.preventDefault();

            const dropdown = link.closest(".has-dropdown");
            const isOpen = dropdown.classList.toggle("dropdown-open");

            link.setAttribute("aria-expanded", String(isOpen));
            return;
        }

        menuToggle.setAttribute("aria-expanded", "false");
        navPanel.classList.remove("is-open");
    });

    document.addEventListener("click", function (event) {
        if (
            !menuToggle.contains(event.target) &&
            !navPanel.contains(event.target)
        ) {
            menuToggle.setAttribute("aria-expanded", "false");
            navPanel.classList.remove("is-open");
        }
    });

});

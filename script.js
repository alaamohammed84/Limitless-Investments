
const slides = document.querySelectorAll(".home-slide");
const nextBtn = document.querySelector(".home-next");
const prevBtn = document.querySelector(".home-prev");
const dots = document.querySelectorAll(".home-dot");

let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}


nextBtn.addEventListener("click", () => {
    showSlide(currentSlide + 1);
});


prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
});


dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
    });
});

setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);

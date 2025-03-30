let currentSlide = 0;
const slides = document.querySelectorAll(".dua-slide");

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

let xStart = null;

function handleTouchStart(evt) {
    xStart = evt.touches[0].clientX;
}

function handleTouchMove(evt) {
    if (!xStart) return;
    let xEnd = evt.touches[0].clientX;
    let xDiff = xStart - xEnd;

    if (xDiff > 50) nextSlide();
    if (xDiff < -50) prevSlide();

    xStart = null;
}

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "flex" : "none";
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

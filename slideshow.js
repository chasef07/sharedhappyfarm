let slideIndex = 1;
let slideInterval;

function initSlideshow() {
    showSlides(slideIndex);
    // Auto advance slides every 5 seconds
    startSlideshow();
}

function startSlideshow() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    // Reset interval when manually changing slides
    clearInterval(slideInterval);
    startSlideshow();
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }
    
    // Show current slide
    slides[slideIndex-1].classList.add("active");
    dots[slideIndex-1].classList.add("active");
}

// Initialize slideshow when the page loads
document.addEventListener('DOMContentLoaded', initSlideshow);
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

// Add this script to handle mobile menu toggling
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');
    
    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Toggle hamburger to X
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (mobileMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
    
    mobileMenuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    
    // Close menu when clicking a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a, .mobile-book-button');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});
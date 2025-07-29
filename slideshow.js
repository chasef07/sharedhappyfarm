/**
 * Slideshow functionality for Shared Happy Farm website
 * Controls automatic and manual slideshow navigation with navigation dots
 */

// Current slide position
let slideIndex = 1;
// Variable to store the automatic slideshow interval
let slideInterval;

/**
 * Initialize the slideshow with default settings
 * Called when the DOM content is loaded
 */
function initSlideshow() {
    showSlides(slideIndex);
    // Start automatic slideshow with 5-second intervals
    startSlideshow();
}

/**
 * Start automatic slideshow rotation
 * Sets an interval to change slides every 5 seconds
 */
function startSlideshow() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

/**
 * Change to next or previous slide
 * @param {number} n - Direction to move (1 for next, -1 for previous)
 */
function changeSlide(n) {
    showSlides(slideIndex += n);
}

/**
 * Jump to a specific slide (used by navigation dots)
 * @param {number} n - Slide number to display
 */
function currentSlide(n) {
    showSlides(slideIndex = n);
    // Reset interval when manually changing slides for better user experience
    clearInterval(slideInterval);
    startSlideshow();
}

/**
 * Display the selected slide and update navigation dots
 * @param {number} n - Slide index to display
 */
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    // Handle wrapping at beginning and end of slideshow
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Hide all slides and deactivate all dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        dots[i].classList.remove("active");
    }
    
    // Show current slide and activate corresponding dot
    slides[slideIndex-1].classList.add("active");
    dots[slideIndex-1].classList.add("active");
}

/**
 * Mobile Menu Functionality
 * Handles toggle, animation, and dismissal of mobile navigation
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize slideshow
    initSlideshow();
    
    // Mobile menu elements
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');
    
    /**
     * Toggle mobile menu visibility and animate hamburger icon
     */
    function toggleMenu() {
        const isActive = mobileMenu.classList.contains('active');
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Update ARIA attributes for accessibility
        mobileMenuToggle.setAttribute('aria-expanded', !isActive);
        mobileMenu.setAttribute('aria-hidden', isActive);
        
        // Animate hamburger to X transformation
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (!isActive) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            // Focus first menu item when opened
            const firstMenuItem = mobileMenu.querySelector('a');
            if (firstMenuItem) {
                setTimeout(() => firstMenuItem.focus(), 100);
            }
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            // Return focus to toggle button when closed
            mobileMenuToggle.focus();
        }
    }
    
    /**
     * Handle keyboard navigation in mobile menu
     */
    function handleKeyNavigation(event) {
        if (!mobileMenu.classList.contains('active')) return;
        
        const focusableElements = mobileMenu.querySelectorAll('a, button');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        // Trap focus within menu
        if (event.key === 'Tab') {
            if (event.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                }
            } else {
                // Tab
                if (document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        }
        
        // Close menu with Escape key
        if (event.key === 'Escape') {
            toggleMenu();
        }
    }
    
    // Event listeners for menu toggling
    mobileMenuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    
    // Add keyboard navigation
    document.addEventListener('keydown', handleKeyNavigation);
    
    // Close menu when clicking any menu link for better user experience
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a, .mobile-book-button');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
    
    // Initialize ARIA attributes
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
});
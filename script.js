// Rotating Testimonials
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function rotateTestimonials() {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
}

// Select menu toggle button and nav links
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Add click event to toggle the menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

setInterval(rotateTestimonials, 3000);

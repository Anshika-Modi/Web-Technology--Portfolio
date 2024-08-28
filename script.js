// scripts.js

// Animate hero section on load
window.addEventListener('load', () => {
    gsap.from('.hero-title', { duration: 1, y: -50, opacity: 0 });
    gsap.from('.hero-subtitle', { duration: 1.2, y: 50, opacity: 0, delay: 0.3 });
    gsap.from('.hero-button', { duration: 1.5, opacity: 0, delay: 0.6 });
});

// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

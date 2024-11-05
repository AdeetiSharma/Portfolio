document.addEventListener('DOMContentLoaded', function() {
    // GSAP animations for header
    gsap.from("#name", { duration: 1, y: -50, opacity: 0, delay: 0.5 });
    gsap.from("h2", { duration: 1, y: -50, opacity: 0, delay: 1 });
    gsap.from(".lead", { duration: 1, y: -50, opacity: 0, delay: 1.5 });

    // Animations for skills section
    const skillsItems = document.querySelectorAll('#skills-list > div');
    skillsItems.forEach((item, index) => {
        gsap.from(item, { duration: 0.5, opacity: 0, y: 50, delay: 2 + index * 0.2 });
    });

    // Animations for projects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        gsap.from(card, { duration: 0.5, opacity: 0, y: 50, delay: 3 + index * 0.2 });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        alert('Your message has been submitted successfully!'); // Alert on submission
        contactForm.reset(); // Reset form fields
    });
});

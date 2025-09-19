// Contact Form Validation
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (name && email && message) {
        // Simulate form submission
        gsap.to(formMessage, {
            opacity: 1,
            duration: 0.5,
            onComplete: () => {
                formMessage.textContent = 'Thank you! Your message has been sent. I\'ll get back to you soon.';
                formMessage.className = 'form-message success';
            }
        });
        
        contactForm.reset();
        
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    } else {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.className = 'form-message error';
        gsap.to(formMessage, { opacity: 1, duration: 0.5 });
        
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 3000);
    }
});

// Animate form fields on focus
const formFields = contactForm.querySelectorAll('input, textarea');
formFields.forEach(field => {
    field.addEventListener('focus', () => {
        field.parentElement.classList.add('focused');
    });
    
    field.addEventListener('blur', () => {
        if (!field.value) {
            field.parentElement.classList.remove('focused');
        }
    });
});
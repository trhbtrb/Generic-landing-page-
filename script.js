// script.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        // Update the icon
        if (body.classList.contains('dark-theme')) {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        }
    });

    // Show/Hide Hobbies
    const toggleHobbiesBtn = document.getElementById('toggle-hobbies');
    const hobbiesSection = document.getElementById('hobbies');
    const hobbyList = document.querySelector('.hobby-list');

    toggleHobbiesBtn.addEventListener('click', () => {
        if (hobbyList.style.display === 'none') {
            hobbyList.style.display = 'flex';
            toggleHobbiesBtn.textContent = 'Hide Hobbies';
        } else {
            hobbyList.style.display = 'none';
            toggleHobbiesBtn.textContent = 'Show Hobbies';
        }
    });

    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const formSuccess = document.getElementById('form-success');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission

        let isValid = true;

        // Name Validation
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your name.';
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.textContent = '';
            nameError.style.display = 'none';
        }

        // Email Validation
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Please enter your email.';
            emailError.style.display = 'block';
            isValid = false;
        } else if (!validateEmail(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email.';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.textContent = '';
            emailError.style.display = 'none';
        }

        // Message Validation
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Please enter your message.';
            messageError.style.display = 'block';
            isValid = false;
        } else {
            messageError.textContent = '';
            messageError.style.display = 'none';
        }

        // If all fields are valid
        if (isValid) {
            formSuccess.textContent = 'Your message has been sent successfully!';
            formSuccess.style.display = 'block';
            contactForm.reset();

            // Hide the success message after 5 seconds
            setTimeout(() => {
                formSuccess.textContent = '';
                formSuccess.style.display = 'none';
            }, 5000);
        }
    });

    // Email Validation Function
    function validateEmail(email) {
        // Simple email regex pattern
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitButton = document.querySelector('.form-submit-btn');

    // Form validation
    function validateForm() {
        let isValid = true;
        if (!emailInput.value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            setError(emailInput, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError(emailInput);
        }

        if (passwordInput.value.length < 6) {
            setError(passwordInput, 'Password must be at least 6 characters long');
            isValid = false;
        } else {
            clearError(passwordInput);
        }

        return isValid;
    }

    function setError(input, message) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message') || document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        if (!formGroup.querySelector('.error-message')) {
            formGroup.appendChild(errorElement);
        }
        input.classList.add('error');
    }

    function clearError(input) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');
        if (errorElement) {
            formGroup.removeChild(errorElement);
        }
        input.classList.remove('error');
    }

    // Prevent default form submission and simulate login process
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            submitButton.textContent = 'Signing In...';
            submitButton.disabled = true;

            // Simulate API call
            setTimeout(function() {
                alert('Login successful!');
                submitButton.textContent = 'Sign In';
                submitButton.disabled = false;
                form.reset();
            }, 2000);
        }
    });

    // Real-time validation
    emailInput.addEventListener('blur', function() {
        if (emailInput.value) {
            validateForm();
        }
    });

    passwordInput.addEventListener('blur', function() {
        if (passwordInput.value) {
            validateForm();
        }
    });
});
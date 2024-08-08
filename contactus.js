document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form');
    const emailInput = document.getElementById('email');
    const textareaInput = document.getElementById('textarea');
    const submitButton = document.querySelector('.form-submit-btn');

    form.addEventListener('submit', function(event) {
        event.preventDefault();


        clearErrors();

        let isValid = validateEmail(emailInput.value) && validateTextarea(textareaInput.value);

        if (isValid) {
            displaySuccess("Form submitted successfully!");
            form.reset(); // Reset form fields
        } else {
            displayError("Please ensure all fields are correctly filled out.");
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            displayError("Please enter a valid email address.", emailInput);
            return false;
        }
        return true;
    }

    function validateTextarea(text) {
        if (text.trim() === "") {
            displayError("Please enter your message.", textareaInput);
            return false;
        }
        return true;
    }

    function displayError(message, element) {
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error-message');
        errorDiv.textContent = message;
        element.parentNode.insertBefore(errorDiv, element.nextSibling);
        element.classList.add('error');
    }

    function displaySuccess(message) {
        const successDiv = document.createElement('div');
        successDiv.classList.add('success-message');
        successDiv.textContent = message;
        form.appendChild(successDiv);
        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());
        const errorInputs = document.querySelectorAll('.error');
        errorInputs.forEach(input => input.classList.remove('error'));
    }
});
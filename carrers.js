document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("career-form");
    const submitButton = form.querySelector("button[type='submit']");
    const formContainer = form.parentNode;

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate form fields
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const country = document.getElementById("country").value.trim();
        const city = document.getElementById("city").value.trim();
        const postalCode = document.getElementById("postal-code").value.trim();
        const resume = document.getElementById("resume").value.trim();

        if (!name || !email || !phone || !country || !city || !postalCode || !resume) {
            alert("Please fill in all required fields.");
            return;
        }

        // Additional email format validation
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Additional phone number format validation
        if (!validatePhone(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        // Display a success message
        form.innerHTML = '<div class="success-message">Thank you for your application! We will get back to you soon.</div>';
        submitButton.style.display = 'none';

        // Optionally, you can redirect the user or perform any other actions after form submission
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^[0-9]{10,15}$/; // Simple phone number validation (adjust as needed)
        return phoneRegex.test(phone);
    }
});
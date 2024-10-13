// Get input elements and the Register button
const form = document.getElementById('myForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const registerButton = document.getElementById('registerButton');

// Function to display an error message
function displayError(inputElementId, errorElementId, message) {
    const errorElement = document.getElementById(errorElementId);
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

// Function to clear error messages
function clearError(errorElementId) {
    const errorElement = document.getElementById(errorElementId);
    errorElement.textContent = '';
}

// Function to validate all fields
function validateForm() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    let isValid = true;

    // Validate username
    if (username === '') {
        displayError('username', 'usernameError', 'Username is required');
        isValid = false;
    } else {
        clearError('usernameError');
    }

    // Validate password
    if (password === '') {
        displayError('password', 'passwordError', 'Password is required');
        isValid = false;
    } else {
        clearError('passwordError');
    }

    // Validate confirm password
    if (confirmPassword === '') {
        displayError('confirmPassword', 'confirmPasswordError', 'Confirm Password is required');
        isValid = false;
    } else if (confirmPassword !== password) {
        displayError('confirmPassword', 'confirmPasswordError', 'Passwords do not match');
        isValid = false;
    } else {
        clearError('confirmPasswordError');
    }

    // Enable or disable the button based on form validity
    registerButton.disabled = !isValid;
}

// Add input event listeners to each field to validate as the user types
usernameInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);
confirmPasswordInput.addEventListener('input', validateForm);

// Form submit event listener
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Final validation before submission
    validateForm();

    // If the form is valid, proceed with form submission
    if (!registerButton.disabled) {
        alert('Form submitted successfully!');
        // form.submit(); // Uncomment this line to submit the form
    }
});

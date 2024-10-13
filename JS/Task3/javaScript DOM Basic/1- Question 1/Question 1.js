// Get the form element
const form = document.getElementById('myForm');

// Create and insert label for username
const usernameLabel = document.createElement('label');
usernameLabel.setAttribute('for', 'username');
usernameLabel.textContent = 'Username: ';
form.insertBefore(usernameLabel, form.children[0]);

// Create and insert label for password
const passwordLabel = document.createElement('label');
passwordLabel.setAttribute('for', 'password');
passwordLabel.textContent = 'Password: ';
form.insertBefore(passwordLabel, form.children[2]);

// Create and insert label for confirm password
const confirmPasswordLabel = document.createElement('label');
confirmPasswordLabel.setAttribute('for', 'confirmPassword');
confirmPasswordLabel.textContent = 'Confirm Password: ';
form.insertBefore(confirmPasswordLabel, form.children[4]);

// Get the form element
const form = document.getElementById("myForm");

// Function to display error message
function displayError(inputElement, errorElementId, message) {
  const errorElement = document.getElementById(errorElementId);
  errorElement.textContent = " "+message;
  errorElement.style.color = "red";
  errorElement.style.fontFamily = "Arial, sans-serif";
}

// Function to clear error message
function clearError(errorElementId) {
  const errorElement = document.getElementById(errorElementId);
  errorElement.textContent = "";
}

// Form submit event listener
form.addEventListener("submit", function (event) {
  // Prevent form submission
  event.preventDefault();

  // Get input values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  

  let isValid = true;

  // Validate username
  if (username === "") {
    displayError("username", "usernameError", "Username is required");
    isValid = false;
  } else {
    clearError("usernameError");
  }

  // Validate password
  if (password === "") {
    displayError("password", "passwordError", "Password is required");
    isValid = false;
  } else {
    clearError("passwordError");
  }


  // If all fields are valid, you can submit the form or take further actions
  if (isValid) {
    // Optionally, submit the form here using form.submit();
    alert("Form submitted successfully!");
  }
});

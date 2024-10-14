"use strict";

const inputBox = document.getElementById('input-box');
const listItems = document.getElementById('list-container');

// Function to add a task to the list
function addTask() {
    if (inputBox.value.trim() === '') {
        showMessage("You must write something!"); // Show custom message box for empty input
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listItems.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7"; // Unicode for the close icon
        li.appendChild(span);
    }
    inputBox.value = ''; // Clear the input box
    saveData();
}

// Event listener for the list items (checking and deleting tasks)
listItems.addEventListener("click", function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked"); // Toggle the checked state of the task
        saveData();
    } else if (e.target.tagName === "SPAN") {
        showDeleteConfirmationDialog(e.target); // Show custom confirmation dialog
    }
}, false);

// Function to save the list items to localStorage
function saveData() {
    localStorage.setItem("data", listItems.innerHTML);
}

// Function to display tasks stored in localStorage when the page loads
function showTasks() {
    if (localStorage.getItem("data")) {
        listItems.innerHTML = localStorage.getItem("data");
    }
}

// Function to show messages in the UI instead of using alerts
function showMessage(message) {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'custom-message';
    messageContainer.innerText = message;
    document.body.appendChild(messageContainer);

    // Remove the message after 3 seconds
    setTimeout(() => {
        messageContainer.remove();
    }, 3000);
}

// Function to show a custom confirmation dialog box for deleting a task
function showDeleteConfirmationDialog(targetElement) {
    const dialogBox = document.createElement('div');
    dialogBox.className = 'custom-dialog-box';
    dialogBox.innerHTML = `
        <p>Are you sure you want to delete this task?</p>
        <button class="dialog-btn confirm-btn">Yes</button>
        <button class="dialog-btn cancel-btn">No</button>
    `;
    document.body.appendChild(dialogBox);

    // Handle the click event for the dialog buttons
    dialogBox.querySelector('.confirm-btn').addEventListener('click', () => {
        targetElement.parentElement.remove(); // Remove the task
        saveData();
        dialogBox.remove(); // Close the dialog box
    });

    dialogBox.querySelector('.cancel-btn').addEventListener('click', () => {
        dialogBox.remove(); // Close the dialog box without removing the task
    });
}

// Run showTasks when the page loads
showTasks();
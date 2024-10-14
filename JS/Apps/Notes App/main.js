"use strict";

const notesContainer = document.querySelector('.notes_container');
const createBtn = document.querySelector('.btn');
let notesData = JSON.parse(localStorage.getItem('notes')) || {}; // Retrieve notes or initialize an empty object

// Function to render notes on the screen
function renderNotes() {
    notesContainer.innerHTML = ''; 
    Object.keys(notesData).forEach(noteId => {
        createNoteElement(noteId, notesData[noteId]);
    });
}

// Function to create a note element in the DOM
function createNoteElement(noteId, noteContent) {
    let inputBox = document.createElement('p');
    let img = document.createElement("img");
    inputBox.className = "input_box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.innerText = noteContent; 
    img.src = "images/delete.png";

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);


    inputBox.addEventListener("input", () => {
        notesData[noteId] = inputBox.innerText;
        updateStorage();
    });

    img.addEventListener("click", () => {
        delete notesData[noteId];
        updateStorage();
        renderNotes();
    });
}

function updateStorage() {
    localStorage.setItem("notes", JSON.stringify(notesData));
}

createBtn.addEventListener("click", () => {
    const noteId = new Date().getTime().toString(); 
    notesData[noteId] = '';
    createNoteElement(noteId, notesData[noteId]);
    updateStorage();
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter" && document.activeElement.classList.contains('input_box')) {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});


renderNotes();
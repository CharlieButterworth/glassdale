// create note form HTML with inputs and render form to DOM
// add a click event for when user clicks the submit button
// submit should grab values from form inputs, build new note object, and POST that note to the API

import { saveNote } from "./NotesProvider.js"




const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
        <input id="note--dateOfInterview" type="date"/>
        <input id="note--author" type="text" placeholder="Your Name Here"/>
        <input id="note--suspect" type="text" placeholder="Suspect Name"/>
        <textarea id="note--note" placeholder="Your Note Here"></textarea>
        <button id="saveNote">Save Note</button>
    `
}

// Adding event here

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveNote") {
        const dateOfInterview = document.querySelector("#note--dateOfInterview").value
        const author = document.querySelector("#note--author").value
        const suspect = document.querySelector("#note--suspect").value
        const note = document.querySelector("#note--note").value
        const timestamp = Date.now()

        // new object here

        const newNote = {
            dateOfInterview,
            timestamp,
            author,
            suspect,
            note
        }

        saveNote(newNote)
    }
}

)




export const NoteForm = () => {
    render()
}
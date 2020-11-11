// create note form HTML with inputs and render form to DOM
// add a click event for when user clicks the submit button
// submit should grab values from form inputs, build new note object, and POST that note to the API

import { saveNote } from "./NotesProvider.js"
import { getCriminals, useCriminals } from "../scripts/criminals/CriminalProvider.js"


// getCriminals
const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")
 
export const NoteForm = () => {
    const arrayOfCriminals = useCriminals()
    render(arrayOfCriminals)
}

const render = (arrayOfCriminals) => {

const dropdown = arrayOfCriminals.map((criminalObj) => {
    return `<option value="${ criminalObj.id }">${ criminalObj.name }</option>`
}).join("")
    contentTarget.innerHTML = `
    
        <input id="note--dateOfInterview" type="date"/>
        <input id="note--author" type="text" placeholder="Your Name Here">
        <select class="dropdown" id="criminalselect">
    <option value="0">Please select a criminal...</option>
      `+ `${dropdown}` +`
</select>
    
        <textarea id="note--note" placeholder="Your Note Here"></textarea>
        <button id="saveNote">Save Note</button>
        
    `
}

// Adding event here

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveNote") {
        
        
        const noteText = document.querySelector("#note--note").value
        const criminalId = parseInt(document.querySelector("#criminalselect").value)
        const dateOfInterview = document.querySelector("#note--dateOfInterview").value
        const author = document.querySelector("#note--author").value
        
        // const suspect = document.querySelector("#note--suspect").value
        // const note = document.querySelector("#note--note").value
        // const timestamp = Date.now()

        // new object here

        // const newNote = {
        //     dateOfInterview,
        //     timestamp,
        //     author,
        //     suspect,
        //     note
        // }

        const noteToSave = {
            noteText,
            criminalId,
            dateOfInterview,
            author
        }

        saveNote(noteToSave)
    }
}

)





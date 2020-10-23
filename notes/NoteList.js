// get the notes from the api >> use the notes array
// iterate the notes array >> make an html representation each
// render html string of notes to the notesContainer element on the DOM

import { NoteAsHTML } from "./NoteHTMLConverter.js";
import { getNotes, useNotes } from "./NotesProvider.js"

 


const notesContainer = document.querySelector(".notesContainer");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())

export const NoteList = () => {
    getNotes()
    .then(() => {
        const allNotes = useNotes()
        render(allNotes)
    })
}
console.log(NoteList)


// Iterating the notes and making them HTML

const render = (notesArray) => {
    let notesHTMLRepresentation = ""
    for (const note of notesArray)  {
        notesHTMLRepresentation += NoteAsHTML(note)
}



// Actually on DOM

notesContainer.innerHTML = `
    ${notesHTMLRepresentation}
`
}
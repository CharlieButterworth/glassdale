// get the notes from the api >> use the notes array
// iterate the notes array >> make an html representation each
// render html string of notes to the notesContainer element on the DOM

import { getCriminals, useCriminals } from "../scripts/criminals/CriminalProvider.js";
import { NoteAsHTML } from "./NoteHTMLConverter.js";
import { getNotes, useNotes, deleteNote } from "./NotesProvider.js"

 


const notesContainer = document.querySelector(".notesContainer");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())

export const NoteList = () => {
    getNotes()
    .then(getCriminals)
    .then(() => {
        const allNotes = useNotes()
        const allCriminals = useCriminals()
        render(allNotes, allCriminals)
    })
}
// console.log(NoteList)


// Iterating the notes and making them HTML

const render = (notesArray, criminalsArray) => {
    let notesHTMLRepresentation = ""
    for (const note of notesArray)  {

        const relatedCriminal  = criminalsArray.find(criminal => criminal.id === note.criminalId)

        notesHTMLRepresentation += NoteAsHTML(note, relatedCriminal)
}



// Actually on DOM

notesContainer.innerHTML = `
    <h3>Case Notes</h3>
    ${notesHTMLRepresentation}
    
`
}

// const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(id).then(
           () => {
               const updatedNotes = useNotes()
               const criminals = useCriminals()
               render(updatedNotes, criminals)
           }
       )
    }
})

// const render = (noteCollection, criminalCollection) => {
//     contentTarget.innerHTML = noteCollection.map(note => {
//         // Find the related criminal
//         const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

//         return `
//             <section class="note">
//                 <h2>Note about ${relatedCriminal.name}</h2>
//                 ${note.noteText}
//             </section>
//         `
//     })
// }

// const NoteList = () => {
//     getNotes()
//         .then(getCriminals)
//         .then(() => {
//             const notes = useNotes()
//             const criminals = useCriminals()

//             render(notes, criminals)
//         })
// }
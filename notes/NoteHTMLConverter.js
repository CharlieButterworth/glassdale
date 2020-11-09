export const NoteAsHTML = (noteObj, criminalObj) => {
    return `
    <div class="note">
    <h5> Officer: ${noteObj.author}</h5>
    <p> Criminal: ${criminalObj.name}</p>
    <p>Date of Interview: ${noteObj.dateOfInterview}</p>
    <p id="note--id">Note: ${noteObj.noteText}</p>
    <button id="deleteNote--${noteObj.id}">Delete</button>
</div>
    `
}
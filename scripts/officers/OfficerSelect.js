import { getOfficers, useOfficers } from "./OfficerProivder.js"

const officersFilterContainer = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

export const OfficerSelect = () => {

    getOfficers()
    .then(() => {
const officerArray = useOfficers()

render(officerArray)

    })

const render = (officers) => {
    officersFilterContainer.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${officers.map(
                officerObj => {
                    return `<option value="${officerObj.name}">${officerObj.name}</option>`
                }
            ).join("")
            }
        </select>
    `

    }
}


eventHub.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "officerSelect") {

        const officerSelectedEvent = new CustomEvent("officerSelected", {
            detail: {
                officerName: changeEvent.target.value
            }
        })
eventHub.dispatchEvent(officerSelectedEvent)
    }

})
/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { getConvictions, useConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector(".container")
console.log(eventHub)
const contentTarget = document.querySelector(".filters__crime")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", (changeEvent) => {
    console.log(changeEvent)

    // Only do this if the `crimeSelect` element was changed
    if (changeEvent.target.id === "crimeSelect") {

        // const [ prefix, chosenCrime ] = changeEvent.target.id.split("--")
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeSelected", {
            detail: {
                crimeThatWasChosen: changeEvent.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})



export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)   
        })
    
}

const render = convictionsCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map(
                convictionObj => {
                    return `<option value="${convictionObj.id}">${convictionObj.name}</option>`
                }
            )
            }
        </select>
    `
}
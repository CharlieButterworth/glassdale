const contentTarget = document.querySelector(".facility__button")

export const displayFacilitiesButton = () => {
     return contentTarget.innerHTML = 
    `<button id="displayFacility">Display Facility</button>
    `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "facility__button") {
        // console.log("witness button was clicked")
    
    
    const facilityButton = new CustomEvent("facilitiesButtonClicked")
    
        eventHub.dispatchEvent(facilityButton)
    }
    
    
    })








//    const customEvent = new CustomEvent("crimeSelected", {
//             detail: {
//                 crimeThatWasChosen: changeEvent.target.value
//             }
//         })

//         // Dispatch to event hub
//         eventHub.dispatchEvent(customEvent)
//     }
// }

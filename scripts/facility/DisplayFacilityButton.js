const contentTarget = document.querySelector(".facility__button")
const eventHub = document.querySelector(".container")


export const displayFacilitiesButton = () => {
     return contentTarget.innerHTML = 
    `<button id="displayFacility">Display Facility</button>
    `
}


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "displayFacility") {
        
        
        const facilityButton = new CustomEvent("facilitiesButtonClicked")
        
        eventHub.dispatchEvent(facilityButton)
    }
    
    console.log("facility button was clicked", clickEvent)
    
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

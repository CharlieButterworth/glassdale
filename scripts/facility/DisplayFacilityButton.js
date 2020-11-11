const contentTarget = document.querySelector(".facility__button")

export const displayFacilitiesButton = () => {
     return contentTarget.innerHTML = 
    `<button id="displayFacility">Display Facility</button>
    `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "displayFacility") {
// console.log("EVENTHUBCLICK", eventHub)
    const customEvent = new CustomEvent("facilitiesButtonClicked", {
        detail: {
            facilityThatWasChosen: clickEvent.target.value
        }
    })
    eventHub.dispatchEvent(customEvent)
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
// })

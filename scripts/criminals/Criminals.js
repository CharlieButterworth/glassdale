const eventHub = document.querySelector(".container")

export const Criminal = (criminalObject, facilities) => {

    
        return `
        
        <div class="criminal">
            <h4>${criminalObject.name}</h4>
            <div class="criminal__details">
                <p>Convicted for ${criminalObject.conviction}</p>
                <p>Arrested by ${criminalObject.arrestingOfficer}</p>
                <p>Incarcerated between:
                    ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                    ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
                </p>
                <p>Age: ${criminalObject.age}</p>
                <div>
                    <h2>Facilities</h2>
                    <ul>
                        ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                    </ul>
                </div>
                <button id="associates--${criminalObject.id}">Show Associates</button>
                <div id="criminal-${criminalObject.id}"class="criminalsContainer"></div>
            </div>
        </div>
        `
    }

//     return `
//     <div id="criminal-${criminalObj.id}"class="criminalsContainer">
//     <p class="name">Name: ${criminalObj.name}</p>  
//      <p class="age">Age: ${criminalObj.age}</p>
//      <p class="Conviction">Conviction: ${criminalObj.conviction}</p>
//      <p class="term start">Start Date: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
//      <p class="term end">End Date: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
//      <button id="associates--${criminalObj.id}">Associate Alibis</button>
//      </div>
//      `
// }

eventHub.addEventListener("click", (eventObj) => {
    const [nameOfId, criminalId] = eventObj.target.id.split("--")

    if(eventObj.target.id.startsWith("associates--")) {

        const myCustomEvent = new CustomEvent("alibiButtonClicked", {
            detail: {
                criminalId: criminalId
            }
        })


        eventHub.dispatchEvent(myCustomEvent)
    }


})
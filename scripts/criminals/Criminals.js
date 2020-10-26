const eventHub = document.querySelector(".container")

export const Criminal = (criminalObj) => {
    return `
    <div id="criminal-${criminalObj.id}"class="criminalsContainer">
    <p class="name">Name: ${criminalObj.name}</p>  
     <p class="age">Age: ${criminalObj.age}</p>
     <p class="Conviction">Conviction: ${criminalObj.conviction}</p>
     <p class="term start">Start Date: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
     <p class="term end">End Date: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
     <button id="associates--${criminalObj.id}">Associate Alibis</button>
     </div>
     `
}

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
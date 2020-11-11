import { useCriminals } from "./CriminalProvider.js"




const eventHub = document.querySelector(".container")

export const createAlibiEventListener = () => {

eventHub.addEventListener("alibiButtonClicked", (eventObj) => {
    console.log("Event Listener", eventObj.detail.criminalId)


    const arrayOfCriminals = useCriminals()

    const foundCriminal = arrayOfCriminals.find((criminalObj) => {
        return criminalObj.id === parseInt(eventObj.detail.criminalId)
    })

        AlibiList(foundCriminal)
})
}

const AlibiList = (criminalObj) => {
    render(criminalObj)
}


const render = (criminalObject) => {
    
    const contentTarget = document.querySelector(`#criminal-${criminalObject.id}`)

    contentTarget.innerHTML = `
    <div class="alibi__list">
        ${criminalObject.known_associates.map(alibiObj => {
            return `
                <p>${alibiObj.name}</p>
                <p>${alibiObj.alibi}</p>
            `
        }).join("")}
    </div>
    `
}

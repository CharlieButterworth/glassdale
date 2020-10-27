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


const render = (criminalObj) => {
    const contentTarget = document.querySelector(`#criminal-${criminalObj.id}`)


    contentTarget.innerHTML += `
    <div class="alibi__list">
        ${criminalObj.known_associates.map(alibiObj => {
            return `
                <p>${alibiObj.name}</p>
                <p>${alibiObj.alibi}</p>
            `
        }).join("")}
    </div>
    `
}

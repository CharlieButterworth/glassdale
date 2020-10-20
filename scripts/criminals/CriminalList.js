import { useConvictions } from "../convictions/ConvictionProvider.js"
import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminals.js"

const eventHub = document.querySelector(".container")
// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    // Use the property you added to the event detail.
    // if (changeEvent.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
       const criminalArray = useCriminals()
      const convictionsArray = useConvictions()

      const convictionThatWasChosen = convictionsArray.find(convictionObj => {
            return convictionObj.id === event.detail.crimeThatWasChosen
        })

const filteredCriminalsArray = criminalArray.filter(criminalObj => {
    return criminalObj.conviction === convictionThatWasChosen.name

})
let criminalsHTMLRepresentions = ""
for (const criminal of filteredCriminalsArray) {

    criminalsHTMLRepresentions += Criminal(criminal)

    criminalsContainer.innerHTML = `
    <h3>Glassdale Criminals</h3>
    <section class="criminalsList">
    ${criminalsHTMLRepresentions}
    </section>
    
    `
}
})





// Render ALL criminals initally
// export const CriminalList = () => {
//     getCriminals()
//         .then(() => {
//             const appStateCriminals = useCriminals()
//             render(appStateCriminals)
//         })
// }



const criminalsContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {

getCriminals()
    .then(() => {
        const criminalArray = useCriminals()

        let criminalsHTMLRepresentions = ""
        for (const criminal of criminalArray) {

            criminalsHTMLRepresentions += Criminal(criminal)

            criminalsContainer.innerHTML = `
            <h3>Glassdale Criminals</h3>
            <section class="criminalsList">
            ${criminalsHTMLRepresentions}
            </section>
            
            
            `
        }
    })
}

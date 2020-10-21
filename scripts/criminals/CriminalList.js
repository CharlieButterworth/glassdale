import { useConvictions } from "../convictions/ConvictionProvider.js"
import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminals.js"

const eventHub = document.querySelector(".container")
// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeSelected", event => {
    console.log("event", event.detail.crimeThatWasChosen)
    // Use the property you added to the event detail.
    // if (changeEvent.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
       const criminalsArray = useCriminals()
      const convictionsArray = useConvictions()
      console.log("Convictions Array", convictionsArray)

      const convictionThatWasChosen = convictionsArray.find(convictionObj =>  convictionObj.id === parseInt(event.detail.crimeThatWasChosen))
          
            
      
console.log(convictionThatWasChosen)

const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
    
    return criminalObj.conviction === convictionThatWasChosen.name

})



console.log(filteredCriminalsArray)

console.log("convictionWasChosen", convictionThatWasChosen)
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

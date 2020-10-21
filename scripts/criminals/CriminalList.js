import { useConvictions } from "../convictions/ConvictionProvider.js"
import { OfficerSelect } from "../officers/OfficerSelect.js"
import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminals.js"

const eventHub = document.querySelector(".container")
// Listen for the custom event you dispatched in ConvictionSelect

    // console.log("event", changeEvent.detail.crimeThatWasChosen)
    // Use the property you added to the event detail.
    const criminalsContainer = document.querySelector(".criminalsContainer")

   export const CriminalList = () => {
        
    getCriminals()
    .then(() => {
        const criminalArray = useCriminals()
        render(criminalArray)

    })
}

eventHub.addEventListener("crimeSelected", event => {

    if (event.detail.crimeThatWasChosen !== 0) {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
       const criminalsArray = useCriminals()
      const convictionsArray = useConvictions()
      console.log("Convictions Array", convictionsArray)

      const convictionThatWasChosen = convictionsArray.find(convictionObj =>  convictionObj.id === parseInt(event.detail.crimeThatWasChosen))
          
        console.log(convictionThatWasChosen)

    }

        // Filtering through the criminals array

const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
    
    return criminalObj.conviction === convictionThatWasChosen.name
})
    render(filteredCriminalsArray)



})


eventHub.addEventListener("officerSelected", OfficerSelectedEventObj => {
    console.log(OfficerSelectedEventObj)

    const selectedOfficerName = OfficerSelectedEventObj.detail.officerName
    console.log(selectedOfficerName)

    const criminalsArray = useCriminals()


    const filteredArrayCriminals = criminalsArray.filter(
        (criminalObj) => {
            return criminalObj.arrestingOfficer === selectedOfficerName
        }
    )
    console.log(filteredArrayCriminals)


    render(filteredArrayCriminals)
})
// const criminalsContainer = document.querySelector(".criminalsContainer")

// export const CriminalList = () => {

// getCriminals()
//     .then(() => {
//         const criminalArray = useCriminals()

const render = (criminalArray) => {

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
}
    

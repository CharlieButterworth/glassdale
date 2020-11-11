import { useConvictions } from "../convictions/ConvictionProvider.js"

import { useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminals.js"
import { getFacilities, useFacilities } from "../facility/FacilityProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "../facility/CriminalFacilityProcivder.js"

const eventHub = document.querySelector(".container")
// Listen for the custom event you dispatched in ConvictionSelect

    // console.log("event", changeEvent.detail.crimeThatWasChosen)
    // Use the property you added to the event detail.
    const contentTarget = document.querySelector(".caseDataContainer")

    // export const CriminalList = () => {
    //     getCriminals()
    //     .then(() => {
    //         const criminalArray = useCriminals()
    //         render(criminalArray)
    
    //     })
    // }
   
    export const CriminalList = () => {
        // Kick off the fetching of both collections of data
        getFacilities()
            .then(getCriminalFacilities)
            .then(
                () => {
                    // Pull in the data now that it has been fetched
                    const facilities = useFacilities()
                    const crimFac = useCriminalFacilities()
                    const criminals = useCriminals()
    
                    // Pass all three collections of data to render()
                    render(criminals, facilities, crimFac)
                }
            )
    }
    


eventHub.addEventListener("crimeSelected", event => {

    if (event.detail.crimeThatWasChosen !== 0) {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
    //    const criminalsArray = useCriminals()
      const convictionsArray = useConvictions()
    //   console.log("Convictions Array", convictionsArray)

      const convictionThatWasChosen = convictionsArray.find(convictionObj =>  convictionObj.id === parseInt(event.detail.crimeThatWasChosen))
          
        // console.log(convictionThatWasChosen)
        // Filtering through the criminals array
        const criminalsArray = useCriminals()
        
const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
    
    return criminalObj.conviction === convictionThatWasChosen.name
})
    const fullFacilityArray = useFacilities()
    const relationshipFullTable = useCriminalFacilities()

    render(filteredCriminalsArray, fullFacilityArray, relationshipFullTable)

    }

})


eventHub.addEventListener("officerSelected", OfficerSelectedEventObj => {
    // console.log(OfficerSelectedEventObj)
    if (OfficerSelectedEventObj.detail.crimeThatWasChosen !== 0) {
    const selectedOfficerName = OfficerSelectedEventObj.detail.officerName
    // console.log(selectedOfficerName)

    const criminalsArray = useCriminals()


    const filteredArrayCriminals = criminalsArray.filter(
        (criminalObj) => {
            return criminalObj.arrestingOfficer === selectedOfficerName
        }
    )
    // console.log(filteredArrayCriminals)

    const fullFacilityArray = useFacilities()
    const relationshipFullTable = useCriminalFacilities()

    render(filteredArrayCriminals, fullFacilityArray, relationshipFullTable)
    }
})



// const render = (criminalArray) => {

//         let criminalsHTMLRepresentions = ""
//         for (const criminal of criminalArray) {

//             criminalsHTMLRepresentions += Criminal(criminal)

//             criminalsContainer.innerHTML = `
//             <h3>Glassdale Criminals</h3>
//             <section class="criminalsList">
//             ${criminalsHTMLRepresentions}
//             </section>
            
            
//             `
//         }
// }

const render = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, facilities)
        }
    ).join("")
}


eventHub.addEventListener("facilitiesButtonClicked", () => {
    FacilityList()
})
    

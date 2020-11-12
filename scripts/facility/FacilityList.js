import { getFacilities, useFacilities } from "./FacilityProvider.js"
import { Facility } from "./Facility.js"
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProcivder.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { Criminal } from "../criminals/Criminals.js"

const eventHub = document.querySelector(".container")
const facilityContainer = document.querySelector(".caseDataContainer")





export const FacilityList = () => {
    // Kick off the fetching of both collections of data
    getFacilities()
        .then(getCriminals)
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()

                // Pass all three collections of data to render()
                render(crimFac, facilities, criminals)
            }
        )
}

const render = (allRelationships, allFacilities, criminalsToRender) => {
    // Step 1 - Iterate all criminals
    facilityContainer.innerHTML = allFacilities.map(
        (facilityObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.facilityId === facilityObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = criminalsToRender.find(facility => facility.id === cf.criminalId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Facility(facilityObject, facilities)
        }
    ).join("")
}

/* const render = (criminals, facilities, crimFac) => {
    let facilityContainerHTML = ""
for (const place of facilityStatementsArray) {

    facilityContainerHTML += Facility(place)

    facilityContainer.innerHTML = 
    ` <h3>Facility List</h3>
    <section class="facilityList">
      ${facilityContainerHTML}
    </section>
    `
}


} */
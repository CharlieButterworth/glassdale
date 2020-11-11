import { getFacilities, useFacilities } from "./FacilityProvider.js"
import { Facility } from "./Facility.js"

const eventHub = document.querySelector(".container")
const facilityContainer = document.querySelector(".caseDataContainer")


eventHub.addEventListener("facilitiesButtonClicked", () => {
    FacilityList()
})


export const FacilityList = () => {
    getFacilities()
    .then(() => {
        const facilityArray = useFacilities()

        render (facilityArray)
        
    })
}

const render = (facilityStatementsArray) => {
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

}
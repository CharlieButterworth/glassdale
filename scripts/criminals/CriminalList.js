import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { Criminal } from "./Criminals.js"

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

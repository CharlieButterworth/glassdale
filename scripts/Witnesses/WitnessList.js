import { getWitnessStatements, useWitnessStatements } from "./WitnessProvider.js"
import { WitnessStatement } from "./WitnessStatement.js";



const eventHub = document.querySelector(".container")
const witnessesContainer = document.querySelector(".caseDataContainer")

eventHub.addEventListener("witnessesClicked", () => {
    witnessList()
})

// Copy and pasted from criminal list
const witnessList = () => {
    getWitnessStatements()
    .then(() => {
        const witnessArray = useWitnessStatements()

        render (witnessArray)
    })
}

// copy and pasted from crimnalList as well

const render = (witnessStatementsArray) => {
    let witnessStatementHTML = ""
for (const witness of witnessStatementsArray) {

    witnessStatementHTML += WitnessStatement(witness)

    witnessesContainer.innerHTML = 
    ` <h3>Glassdale Witnesses</h3>
    <section class="witnessesList">
      ${witnessStatementHTML}
    </section>
    `
}

}
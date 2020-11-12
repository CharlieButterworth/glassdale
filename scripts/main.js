import { NoteForm } from "../notes/NoteForm.js";
import { NoteList } from "../notes/NoteList.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { createAlibiEventListener } from "./criminals/AlibiList.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { getCriminals } from "./criminals/CriminalProvider.js";
import { displayFacilitiesButton } from "./facility/DisplayFacilityButton.js";
import { getFacilities } from "./facility/FacilityProvider.js";

import { OfficerList } from "./officers/OfficerList.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { renderWitnessButton } from "./Witnesses/WitnessButton.js";
import "./witnesses/WitnessList.js"
import "./facility/FacilityList.js"
import { FacilityList } from "./facility/FacilityList.js";


OfficerList()
CriminalList()
ConvictionSelect()
OfficerSelect()
NoteList()

createAlibiEventListener()
renderWitnessButton()
getCriminals()
    .then(() => NoteForm())
displayFacilitiesButton()
// getFacilities()





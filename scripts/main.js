import { NoteForm } from "../notes/NoteForm.js";
import { NoteList } from "../notes/NoteList.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { createAlibiEventListener } from "./criminals/AlibiList.js";
import { CriminalList } from "./criminals/CriminalList.js";
import { getCriminals } from "./criminals/CriminalProvider.js";

import { OfficerList } from "./officers/OfficerList.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { renderWitnessButton } from "./Witnesses/WitnessButton.js";
import "./witnesses/WitnessList.js"


OfficerList()
CriminalList()
ConvictionSelect()
OfficerSelect()
NoteList()

createAlibiEventListener()
renderWitnessButton()
getCriminals()
    .then(() => NoteForm())
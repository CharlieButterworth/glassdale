import { NoteForm } from "../notes/NoteForm.js";
import { NoteList } from "../notes/NoteList.js";
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { createAlibiEventListener } from "./criminals/AlibiList.js";
import { CriminalList } from "./criminals/CriminalList.js";

import { OfficerList } from "./officers/OfficerList.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";


OfficerList()
CriminalList()
ConvictionSelect()
OfficerSelect()
NoteForm()
NoteList()

createAlibiEventListener()
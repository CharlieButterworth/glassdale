import { getOfficers, useOfficers } from "./officers/OfficerProivder.js";

getOfficers()
.then(() =>{
    const officerArray = useOfficers()
    console.log(officerArray)

})
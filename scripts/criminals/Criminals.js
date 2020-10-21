export const Criminal = (criminalObj) => {
    return `
    <div class="criminalsContainer">
    <p class="name">Name: ${criminalObj.name}</p>  
     <p class="age">Age: ${criminalObj.age}</p>
     <p class="Conviction">Conviction: ${criminalObj.conviction}</p>
     <p class="term start">Start Date: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
     <p class="term end">End Date: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
     </div>
     `
}
export const Facility = (facilityObject, taco) => {
    return `<div class="facility">
    <p> ${facilityObject.facilityName}</p>
    <p>Security Level: ${facilityObject.securityLevel}</p>
    <p>Capacity: ${facilityObject.capacity}</p>
    <h4>Criminals</h4>
    <ul>
    ${taco.map(criminal => `<li>${criminal.name}</li>`).join("")}
</ul>
    
    
  </div>
    `
}
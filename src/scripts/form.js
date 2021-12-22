import { saveReservation } from "./dataAccess.js"

export const form = () => {
    let html = `
        <form id="form">
            <div class="field">
                <label for="parentName" class="label">Parent's name</label>
                <input type="text" class="input" id="parentName" name="parentName" value=""/>
            </div>
            <div class="field">
                <label for="childName" class="label">Child's name</label>
                <input type="text" class="input" id="childName" name="childName" /> 
            </div>
            <div class="field"> 
                <label for="childAge" class="label">Age of child</label>
                <input type="number" class="input" id="childAge" name="childAge" />
            </div>
            <div class="field"> 
                <label for="address" class="label">Address of the party</label>
                <input type="text" class="input" id="address" name="address" />
            </div>
            <div class="field">
                <label for="date" class="label">When is the party?</label>
                <input type="date" class="input" id="date" name="date" />
            </div>
            <div class="field">
                <label for="length" class="label">How many hours?</label>
                <input type="number" class="input" id="length" name="length" />
            </div>
        </form>
        
        <button class="button" id="submitRequest">Submit Request</button>

    `
    return html
}
    
const mainContainer = document.querySelector("#container");
 
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {   
        const parentName = document.getElementById("parentName").value;
        const childName = document.getElementById("childName").value;
        const childAge = document.getElementById("childAge").value;
        const address = document.getElementById("address").value;
        const date = document.getElementById("date").value;
        const length = document.getElementById("length").value;

        const infoForAPI = {
            parentName: parentName,
            childName: childName,
            childAge: childAge,
            address: address,
            date: date,
            length: length
        }
    saveReservation(infoForAPI)
    document.getElementById("form").reset()
    }
})
 

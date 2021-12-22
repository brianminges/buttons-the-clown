import { getReservations, deleteRequest } from "./dataAccess.js"

const convertReservationsToListElement = (reservation) => {
     
    return ` 
    <div class="listdiv" <li class="list">
    🤡 ${reservation.address}

    <button class="reservation__delete" id="reservation--${reservation.id}">Deny!</button>
    
    </li></div>
    <hr class="rule">
`
}
 
export const Reservations = () => {
    const reservations = getReservations()
    
    let html = `
        <ul>
            ${reservations.map(reservation => convertReservationsToListElement(reservation)).join(" ")}
        </ul>
    `
    return html
}

//This deletes the appearance request
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("reservation")) {
        const [,reservationId] = clickEvent.target.id.split("--");
        deleteRequest(parseInt(reservationId));
    }
})

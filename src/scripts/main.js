import { rentAClown } from "./clowns.js"
import { fetchReservations } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations().then(
        () => {

        mainContainer.innerHTML = rentAClown()
    }) 
} 

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
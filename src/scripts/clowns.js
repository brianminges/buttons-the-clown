import { form } from "./form.js"
import { Reservations } from "./reservations.js"

export const rentAClown = () => {
    return `
        <h1>Meet Buttons and Lollipop!</h1>
        <section class="serviceForm">
            <h2>Request a clown for your party</h2>
            ${form()}
        </section>

        <section class="serviceRequests">
            <h2>Appearance requests</h2>
            ${Reservations()}
        </section>
    `
}
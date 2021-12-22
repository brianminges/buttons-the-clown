const applicationState = {
    clowns: [],
    clients: [],
    reservations: [],
}

const API = "http://localhost:8088"

// This sends input data to API
export const saveReservation = (reservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reservation)
    }

    return fetch(`${API}/reservations`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        const mainContainer = document.querySelector("#container")
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}

// This gets reservations from API 
export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(res => res.json())
        .then(
            (request) => {
                applicationState.reservations = request
            }
        )
}

// This copies the reservations array
export const getReservations = () => {
    return applicationState.reservations.map(reservation => ({...reservation})) 
}

// This deletes the appearance request
export const deleteRequest = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE" })
        .then(
            () => {
                const mainContainer = document.querySelector("#container")
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )

}



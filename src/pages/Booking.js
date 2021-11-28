import React from "react"

import Toolbar from "./toolbar/Toolbar"
import Contacts from "./contacts/Contacts"
import BookingMC from "./maincontent/BookingMC"

function Booking() {
    return (
        <div>
            <Toolbar />
            <BookingMC />
            <Contacts />
        </div>
    )
}

export default Booking
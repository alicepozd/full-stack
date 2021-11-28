import React from "react"

import Toolbar from "./toolbar/Toolbar"
import Contacts from "./contacts/Contacts"
import ClubsMC from "./maincontent/ClubsMC"

function Clubs() {
    return (
        <div>
            <Toolbar />
            <ClubsMC />
            <Contacts />
        </div>
    )
}

export default Clubs
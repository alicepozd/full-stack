import React from "react"

import Toolbar from "./toolbar/Toolbar"
import Contacts from "./contacts/Contacts"
import AccountMC from "./personal_account/AccountMC"

function Home() {
    return (
        <div>
            <Toolbar />
            <AccountMC />
            <Contacts />
        </div>

    )
}

export default Home
import React from "react"

import Toolbar from "./toolbar/Toolbar"
import Contacts from "./contacts/Contacts"
import HomeMC from "./maincontent/HomeMC"

function Home() {
    return (
        <div>
            <Toolbar />
            <HomeMC />
            <Contacts />
        </div>

    )
}

export default Home
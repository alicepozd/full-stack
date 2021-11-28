import React from "react"

import './Toolbar.css';

import home from "./Homei.png";
import user from "./Useri.png";

function Toolbar() {
    return (
        <div className="toolbar">
            <div className='link_bar'>
                <a href='/clubs' className="text">мероприятия</a>
                <a href='/booking' className="text">бронь помещений</a>
            </div>
            <div className='icons_bar'>
                <a href='/' className="icons"><img src={home} width="50px"/></a>
                <a href='/personal_account' className="icons"><img src={user} width="50px"/></a>
            </div>
        </div>
    )
}

export default Toolbar
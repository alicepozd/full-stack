import React from "react"

import './Contacts.css';

import map from "./map.jpg";

function Contacts() {
    return (
        <footer className="Footer">
            <div className="Block">
                <div className="Contact_header">
                    Наши контакты:
                </div>
                <div className="Contacts">
                    <div className="Contact">
                        адрес: 
                        страна Эриадор, Шир, г. Бри, гарцующая кобыла
                    </div>
                    <div className="Contact">
                        телефон: 
                        +7  (495) 952-88-33
                    </div>
                    <div className="Contact">
                        Время работы:  
                        9:00-2:00 - будни
                        10:00- 3:00 - выходные
                    </div>
                </div>
            </div>
            <div className="Block">
                <img src={map} width="800px"/>
            </div>
        </footer>
    );
}

export default Contacts
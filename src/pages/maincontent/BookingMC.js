import React from 'react';
import './MainContent.css'


function HomeMC() {
    return (
        <main className="main_booking">

            <div className="title">
                <p className="header">
                    Здесь вы можете забронировать помещение или столик
                </p>
            </div>


            <div className="cloud">
                <p className="normal">
                    Для брони столика позвоните по контактному телефону
                </p>
            </div>


            <div className="information">
                <p className="header">
                    Бронь зала:
                </p>

                <li className="normal">
                    ~10 человек
                </li>
                <li className="normal">
                    в будние дни 10-18 за каждый час 300р
                </li>
                <li className="normal">
                    в будние дни после 18 и в выходные за каждый час 500р
                </li>
            </div>
        </main>
    );
}

export default HomeMC;
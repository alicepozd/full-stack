import React from 'react';
import './MainContent.css'


function HomeMC() {
    return (
        <main className="main_clubs">

            <div className="title">
                <p className="header">
                    Здесь вы можете зарегистрироваться на мероприятие
                </p>
            </div>


            <div className="information">
                <p className="header">
                    Мероприятия:
                </p>

                <li className="normal">
                    нахождение в зале мероприятий во время собраний клубов +100р час
                </li>
                <li className="normal">
                    все мастерклассы 1000р час
                </li>
            </div>
        </main>
    );
}

export default HomeMC;
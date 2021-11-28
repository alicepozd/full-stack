import React from 'react';
import './MainContent.css'

import games from "./images/games.jpg";
import clubs_place from "./images/clubs_place.jpeg";
import cookies from "./images/cookies.jpg";

function HomeMC() {
    return (
        <main className="main_home">

            <div className="title">
                <p className="header">
                    антикафе Фандорин
                </p>
                <p className="coursive">
                     Если ты хочешь поиграть в настольные игры, почитать в приятной атмосфере, или просто побыть в компании интересных людей, присоединяся к нам!
                </p>
            </div>


            <div className="cloud">
                <p className="normal">
                    переходи на тёмную сторону, у нас есть печеньки!
                </p>
            </div>


            <div className="information">
                <p className="header">
                    В нашем антикафе в любое время доступны:
                </p>

                <li className="normal">
                    тихий зал для занятий и чтения
                </li>
                <li className="normal">
                    громкий зал для игры в настольные игры и общения
                </li>
                <li className="normal">
                    коллекция настольных игр
                </li>
                <li className="normal">
                    книги многих известных авторов
                </li>
                <li className="normal">
                    безлимитный чай, кофе и, конечно, обещанные печеньки :)
                </li>

                <p className="normal">
                    И всё это по тарифу 1р в минуту; Бесплатно, начиная от 500р.
                </p>

                <img src={games}/>

                <p className="header">
                    По вечерам в антикафе в зависимости от дня недели собираются клубы:
                </p>

                <li className="normal">
                    спортивной мафии
                </li>
                <li className="normal">
                    художественной литературы
                </li>
                <li className="normal">
                    проводятся кино вечера
                </li>
                <li className="normal">
                    magic
                </li>
                <li className="normal">
                    настольных игр
                </li>
                <li className="normal">
                    d&d
                </li>

                <p className="normal">
                    А так же в воскресенье проводятся не регулярные мастерклассы.
                </p>

                <a href='/clubs' className="link_text">Узнать про это подробнее и зарегистрироваться можно здесь.</a>

                <img src={clubs_place}/>

                <p className="normal">
                    Кроме этого есть некоторое количество комнат, которые можно забронировать. 
                </p>

                <a href='/booking' className="link_text">О расценках подробнее здесь.</a>

                <p className="header">
                    Ждём вас в антикафе Фандорин!
                </p>

                <img src={cookies}/>
            </div>
        </main>
    );
}

export default HomeMC;
import React, {Component} from 'react';
import PageLayout from "../../Decorators/PageLayout";
import './what'
export class What extends Component {
    render() {
        return [
            <div key={1} className="what" id="what">
                <div className="what__wrap l-wrap">
                    <h2 className="what__title">
                        ЧТО МЫ ДЕЛАЕМ
                    </h2>
                    <div className="what__text">
                        <p>
                            Наша компания проводит весь комплекс работ по обслуживанию и ремонту <br/>
                            систем кондиционирования, вентиляции и холодоснабжения
                        </p>
                    </div>
                    <div className="what__list">
                        <ul className="list list--yellow">
                            <li className="list__item">
                                Регулярное техническое обслуживание в соответствии с нормами предприятия-изготовителя
                                оборудования;
                            </li>
                            <li className="list__item">
                                Диагностика состояния и неисправностей систем;
                            </li>
                            <li className="list__item">
                                Чистка компонентов оборудования;
                            </li>
                            <li className="list__item">
                                Аварийные выезды;
                            </li>
                            <li className="list__item">
                                Дополнительные выезды на объект в периоды температурных пиков (резкие похолодания,
                                потепления).
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            ,
            <div key={2} className="for" id="for">
                <div className="for__wrap l-wrap">
                    <h2 className="for__title">
                        ДЛЯ КОГО МЫ ЭТО ДЕЛАЕМ
                    </h2>
                    <div className="for__text">
                        <p>
                            Наша компания работает на рынке более 5 лет и за это время с нами работают самые разные
                            клиенты от частных лиц до крупнейших торговых сетей Мира.
                        </p>
                    </div>
                    <ul className="for__list">
                        <li className="for__item for__item--1">
                            <br/>Частные лица
                        </li>
                        <li className="for__item for__item--2">
                            <br/>Заводы
                        </li>
                        <li className="for__item for__item--3">
                            <br/>Отели
                        </li>
                        <li className="for__item for__item--4">
                            Гос.<br/>
                            организации
                        </li>
                        <li className="for__item for__item--5">
                            Крупные<br/>
                            торговые сети
                        </li>
                    </ul>
                </div>
            </div>
        ];
    }
}

export default PageLayout(What);
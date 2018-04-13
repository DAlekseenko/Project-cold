import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './nav'

export default class Main extends Component {
    render() {
        return (
            <div className="main-menu" id="main-menu">
                <nav className="main-menu__wrap l-wrap">
                    <ul className="menu">
                        <li className="menu__item">
                            <NavLink exact to="/"  className="menu__href">Главная</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/what" className="menu__href">Что мы делаем</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/works" className="menu__href">Наши работы</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/prices" className="menu__href">Стоимость</NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to="/how" className="menu__href">Как мы работаем </NavLink>
                        </li>
                        <li className="menu__item menu__item--contacts">
                            <NavLink to="/contacts" className="menu__href">Контакты</NavLink>
                        </li>
                        <li className="menu__item menu__item--phone">
                            <span className="menu__href menu__href--active">8 (000) 000-00-00</span>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

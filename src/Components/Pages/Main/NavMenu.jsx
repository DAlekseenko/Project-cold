import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Main extends Component {
    render() {
        return (
            <div className="color_wrapper fixed-nav">
                <section className="top-nav">
                    <div className='nav-logo'/>
                    <input id="menu-toggle" type="checkbox"/>
                    <label className='menu-button-container' htmlFor="menu-toggle">
                        <div className='menu-button'/>
                    </label>
                    <ul className="menu">
                        <li><NavLink exact to="/" className="menu__href">Главная</NavLink></li>
                        <li><NavLink to="/what" className="menu__href">Услуги</NavLink></li>
                        <li><NavLink to="/works" className="menu__href">Наши работы</NavLink></li>
                        <li><NavLink to="/prices" className="menu__href">Стоимость</NavLink></li>
                        <li><NavLink to="/contacts" className="menu__href">Контакты</NavLink></li>
                        {/*<li><a href="#how" className="menu__href goto">Отзывы</a></li>*/}
                    </ul>
                </section>
            </div>
        );
    }
}

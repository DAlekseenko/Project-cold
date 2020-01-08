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
                        <li className="drop-container">
                            <NavLink to="/what" className="menu__href">Услуги</NavLink>
                            <ul className="dropdown">
                                <li>
                                    <NavLink to="/what/design" className="menu__href">Проектирование вентиляции</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/what/ventilation-installation" className="menu__href">Монтаж вентиляции</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/what/ventilation-service" className="menu__href">Обслуживание систем вентиляции</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/what/ventilation-repair" className="menu__href">Ремонт систем вентиляции</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/what/ventilation-install" className="menu__href">Установка кондиционеров</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/what/diagnostics-conditioners" className="menu__href">Ремонт кондиционеров</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/what/clean-conditioners" className="menu__href">Чистка кондиционеров</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/what/service-conditioners" className="menu__href">Заправка кондиционеров</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/what/vrv-service" className="menu__href">Монтаж и ремонт VRV и VRF Систем</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/what/refrigeration-service" className="menu__href">Ремонт холодильного оборудования</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/what/chillers-service" className="menu__href">Ремонт чиллеров и файнколов</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/what/chiller-install" className="menu__href">Монтаж чиллеров и файнколов</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/what/split-install" className="menu__href">Установка сплит систем</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li><NavLink to="/works" className="menu__href">Наши работы</NavLink></li>
                        <li><NavLink to="/prices" className="menu__href">Стоимость</NavLink></li>
                        <li><NavLink to="/contacts" className="menu__href">Контакты</NavLink></li>
                    </ul>
                </section>
            </div>
        );
    }
}

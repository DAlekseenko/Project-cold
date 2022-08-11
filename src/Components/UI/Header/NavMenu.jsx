import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group'
import classNames from 'classnames';

export default function Main() {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false)

    function toggleSubMenu() {
        setChecked(!checked)
        if (checked) {
            setOpen(false)
        }
    }
    const list = [
        {text: 'Проектирование систем вентиляции', link: 'design'},
        {text: 'Монтаж систем вентиляции', link: 'ventilation-installation'},
        {text: 'Обслуживание систем вентиляции', link: 'ventilation-service'},
        {text: 'Ремонт систем вентиляции', link: 'ventilation-repair'},
        {text: 'Установка кондиционеров', link: 'install-conditioners'},
        {text: 'Ремонт кондиционеров', link: 'diagnostics-conditioners'},
        {text: 'Чистка кондиционеров', link: 'clean-conditioners'},
        {text: 'Заправка кондиционеров', link: 'service-conditioners'},
        {text: 'Монтаж и ремонт VRV и VRF систем', link: 'vrv-service'},
        {text: 'Ремонт чиллеров и файнколов', link: 'chillers-service'},
        {text: 'Монтаж чиллеров и файнколов', link: 'chiller-install'},
        {text: 'Установка сплит систем', link: 'split-install'},
    ]

    const handleCall = () => {
        if (window.ym) {
            window.ym(52948192, 'reachGoal', 'call');
        }
    }

    return (
        <div className="color_wrapper fixed-nav">
            <section className="top-nav">
                <div className='nav-logo'/>
                <div className="header__phone-number" onTouchStart={handleCall}>
                    +7(909)953-43-67
                </div>
                <input id="menu-toggle" type="checkbox" onChange={toggleSubMenu}/>
                <label className='menu-button-container' htmlFor="menu-toggle">
                    <div className='menu-button'/>
                </label>
                <ul className={classNames('menu', {'menu-dropdown-open': open})}>
                    <li><NavLink exact to="/" className="menu__href">Главная</NavLink></li>
                    <li className={classNames('drop-container', {'dropdown-open': open})}>
                        <div
                            className={classNames(
                                "sub-menu-toggle",
                                {"sub-control-visible": checked, "sub-control-open": open})
                            }
                            onClick={() => {
                                setOpen(!open)
                            }}
                        />
                        <NavLink to="/what" className="menu__href">Услуги</NavLink>
                        <CSSTransition in={open} timeout={200} classNames="my-node">
                            <ul className="dropdown">
                                {list.map(({text, link}) =>
                                    (
                                        <li key={link}>
                                            <NavLink to={`/what/${link}`} className="menu__href">
                                                {text}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </CSSTransition>
                    </li>
                    <li><NavLink to="/prices" className="menu__href">Стоимость</NavLink></li>
                    <li><NavLink to="/contacts" className="menu__href">Контакты</NavLink></li>
                </ul>
            </section>
        </div>
    );
}

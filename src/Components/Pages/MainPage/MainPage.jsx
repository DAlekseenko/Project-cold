import React from 'react';
import PageLayout from "../../Decorators/PageLayout";

import PageComponent from "../../Decorators/PageComponent";
import FormFeedback  from "../Partials/FormFeedback";

export class MainPage extends PageComponent {
    render() {
        return [
            <header key={1} className="header wide-bg" id="header">
                <div className="header__wrap l-wrap">
                    <div className="header__logo">
                        <div className="logo">Название компании</div>
                    </div>
                    <div className="header__phone">
                        <div className="header__phone-number">
                            8 (000) 000-00-00
                        </div>
                        <a href="#callback" className="i-button i-button--callack fancybox">
                            Заказать звонок
                        </a>
                    </div>
                    <div className="header__title">
                        <h1 className="header-title">
                        <span className="header-title__line1">
                            Cервисное обслуживание и ремонт систем
                        </span>
                            <span className="header-title__line2">
                            КОНДИЦИОНИРОВАНИЯ
                        </span>
                            <span className="header-title__line3">
                            и ВЕНТИЛЯЦИИ
                        </span>
                        </h1>
                    </div>
                    <p className="header__text">
                        Получите бесплатную консультацию специалиста<br/>
                        по сервисному обслуживанию вашей системы
                    </p>
                    <div className="header__button">
                        <a href="#consultation" className="i-button i-button--yellow">Получить консультацию</a>
                    </div>
                </div>
            </header>
            ,
            <div key={2} className="clients__wrap l-wrap">
                <div className="clients__list">
                    <img src="/images/clients/1.png" alt="Clients" className="clients__image"/>
                    <img src="/images/clients/2.png" alt="Clients" className="clients__image"/>
                    <img src="/images/clients/3.png" alt="Clients" className="clients__image"/>
                    <img src="/images/clients/4.png" alt="Clients" className="clients__image"/>
                    <img src="/images/clients/5.png" alt="Clients" className="clients__image"/>
                    <img src="/images/clients/6.png" alt="Clients" className="clients__image"/>
                    <img src="/images/clients/7.png" alt="Clients" className="clients__image"/>
                </div>
            </div>
            ,
            <div key={3} className="which">
                <div className="which__wrap l-wrap">
                    <h2 className="which__title">
                        КАКИЕ СИСТЕМЫ МЫ ОБСЛУЖИВАЕМ
                    </h2>
                    <div className="which__list">
                        <ul className="list">
                            <li className="list__item">
                                Фреоновое холодильное оборудование: от холодильных витрин до промышленных
                                многокомпрессорных станций.
                            </li>
                            <li className="list__item">
                                Приточно-вытяжные системы вентиляции и кондиционирования воздуха.
                            </li>
                            <li className="list__item">
                                Локальные и мультизональные климатические системы (сплит-системы и VRF системы).
                            </li>
                            <li className="list__item">
                                Холодильные машины центральных систем вентиляции и холодоснабжения.
                            </li>
                            <li className="list__item">
                                Системы подпора воздуха и дымоудаления.
                            </li>
                            <li className="list__item">
                                Воздушные завесы и системы воздушного отопления.
                            </li>
                            <li className="list__item">
                                Локальные и центральные систем автоматики и управления вентиляцией.
                            </li>
                        </ul>
                    </div>
                    <div className="which__manufacturers">
                        <div className="manufacturers">
                            <div className="manufacturers__title">
                                Производители систем кондиционирования
                            </div>
                            <div className="manufacturers__images">
                                <img src="/images/cond/1.png" alt="Производители систем кондиционирования"
                                     className="manufacturers__image"/>
                                <img src="/images/cond/2.png" alt="Производители систем кондиционирования"
                                     className="manufacturers__image"/>
                                <img src="/images/cond/3.png" alt="Производители систем кондиционирования"
                                     className="manufacturers__image"/>
                                <img src="/images/cond/4.png" alt="Производители систем кондиционирования"
                                     className="manufacturers__image"/>
                                <img src="/images/cond/5.png" alt="Производители систем кондиционирования"
                                     className="manufacturers__image"/>
                                <img src="/images/cond/6.png" alt="Производители систем кондиционирования"
                                     className="manufacturers__image"/>
                                <img src="/images/cond/7.png" alt="Производители систем кондиционирования"
                                     className="manufacturers__image"/>
                                <img src="/images/cond/8.png" alt="Производители систем кондиционирования"
                                     className="manufacturers__image"/>
                                <img src="/images/cond/9.png" alt="Производители систем кондиционирования"
                                     className="manufacturers__image"/>
                            </div>
                        </div>
                    </div>
                    <div className="which__manufacturers">
                        <div className="manufacturers">
                            <div className="manufacturers__title">
                                Производители холодильного оборудования
                            </div>
                            <div className="manufacturers__images">
                                <img src="/images/ref/1.png" alt="Производители холодильного оборудования"
                                     className="manufacturers__image"/>
                                <img src="/images/ref/2.png" alt="Производители холодильного оборудования"
                                     className="manufacturers__image"/>
                                <img src="/images/ref/3.png" alt="Производители холодильного оборудования"
                                     className="manufacturers__image"/>
                                <img src="/images/ref/4.png" alt="Производители холодильного оборудования"
                                     className="manufacturers__image"/>
                                <img src="/images/ref/5.png" alt="Производители холодильного оборудования"
                                     className="manufacturers__image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>,
            <div key={4} className="consultation wide-bg" id="consultation">
                <div className="consultation__wrap l-wrap">
                    <h2 className="consultation__title">
                        Получите бесплатную
                        <span className="consultation__subtitle">
                        консультацию
                    </span>
                    </h2>
                    <div className="consultation__text">
                        <p>
                            ЭКСПЕРТА по сервисному обслуживанию вашей системы
                        </p>
                    </div>
                    <div className="consultation__form">
                        <FormFeedback
                            formClass="form"
                            inputWrapClass="form__line"
                            inputClass="form__input"
                            buttonWrapClass="form__button"
                            buttonClass="i-button i-button--yellow"
                        />
                    </div>
                </div>
            </div>
        ];
    }
}

export default PageLayout(MainPage)
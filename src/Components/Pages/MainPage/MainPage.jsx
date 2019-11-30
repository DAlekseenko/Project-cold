import React, {Fragment} from 'react';
import PageLayout from "../../Decorators/PageLayout";

import PageComponent from "../../Decorators/PageComponent";
import FormFeedback from "../../UI/FormFeedback";
import Modal from '../../UI/Modal';

export class MainPage extends PageComponent {

    state = {
        isOpen: false
    }

    onToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return <Fragment>
            <header className="header wide-bg" id="header">
                <div className="header__wrap l-wrap">
                    <div className="header__logo"/>
                    <div className="header__phone">
                        <div className="header__phone-number">
                            +7(909)953-43-67
                        </div>
                        <Modal isOpen={this.state.isOpen} toggleModal={this.onToggle}/>
                        <span className="i-button i-button__callback" onClick={this.onToggle}>
                            Заказать звонок
                        </span>
                    </div>
                    <div className="header__title">
                        <h1 className="header-title">
                        <span className="header-title__line1">
                            Проектирование, сервисное обслуживание и ремонт систем
                        </span>
                            <span className="header-title__line2">
                            Кондиционирования
                        </span>
                            <span className="header-title__line3">
                            и вентиляции
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
            <div className="clients__wrap l-wrap">
            </div>
            <div className="which">
                <div className="which__wrap l-wrap">
                    <h2 className="which__title">
                        О нас
                    </h2>
                    <div className="which__list">
                        Компания ООО «Проект Холод» специализируется на проектировании, пусконаладочных и монтажных
                        работах, а также поставке оборудования и сервисном обслуживании современных систем вентиляции,
                        аспирации и кондиционирования воздуха в городских инженерных сетях, а также систем
                        холодоснабжения технологического оборудования.
                    </div>
                </div>
                <div className="which__wrap l-wrap">
                    <h2 className="which__title">
                        Какие системы мы обслуживаем
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
            </div>
            <div className="consultation wide-bg" id="consultation">
                <div className="consultation__wrap l-wrap">
                    <h2 className="header-title">
                        <span className="header-title__line3">
                             Получите бесплатную
                        </span>
                        <span className="header-title__line2">
                            консультацию
                        </span>
                    </h2>
                    <p className="header__text">
                        ЭКСПЕРТА по сервисному обслуживанию вашей системы
                    </p>
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
        </Fragment>
    }
}

export default PageLayout(MainPage)
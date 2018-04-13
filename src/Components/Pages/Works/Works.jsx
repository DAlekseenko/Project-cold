import React from 'react';
import PageLayout from "../../Decorators/PageLayout";
import PageComponent from "../../Decorators/PageComponent";
import './works'

export class Works extends PageComponent {
    render() {
        return (
            <div key={1} className="jobs" id="jobs">
                <div className="jobs__wrap l-wrap">
                    <h2 className="jobs__title">
                        Выполненные работы
                        <span className="jobs__subtitle">
                        Для корпоративных клиентов
                    </span>
                    </h2>
                    <div className="jobs__item">
                        <div className="job">
                            <h4 className="job__title">
                                Объект №1
                            </h4>
                            <div className="job__text">
                                <p>
                                    Проектирование и проведение работ по переоснащению холодильным оборудованием. Работы
                                    ведутся на данный момент.
                                </p>
                            </div>
                            <div className="job__images">
                                <div className="job__images_wrapper">
                                    <img src="/images/jobs/auchan/1.jpg" width="308" height="175" alt=""
                                         className="job__image"/>
                                </div>
                                <div className="job__images_wrapper">
                                    <img src="/images/jobs/auchan/2.jpg" width="308" height="175" alt=""
                                         className="job__image"/>
                                </div>
                                <div className="job__images_wrapper">
                                    <img src="/images/jobs/auchan/3.jpg" width="308" height="175" alt=" "
                                         className="job__image"/>
                                </div>
                                <div className="job__images_wrapper">
                                    <img src="/images/jobs/auchan/4.jpg" width="308" height="175" alt=" "
                                         className="job__image"/>
                                </div>
                                <div className="job__images_wrapper">
                                    <img src="/images/jobs/auchan/5.jpg" width="308" height="175" alt=" "
                                         className="job__image"/>
                                </div>
                                <div className="job__images_wrapper">
                                    <img src="/images/jobs/auchan/6.jpg" width="308" height="175" alt=" "
                                         className="job__image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jobs__item">
                        <div className="job">
                            <h4 className="job__title">
                                Объект №2
                            </h4>
                            <div className="job__text">
                                <p>
                                    Сервисное обслуживание и ремонт сплит-систем, VRF систем LG и Mitsubishi,
                                    холодильных камер
                                </p>
                            </div>
                            <div className="job__images">
                                <div className="job__images_wrapper">
                                    <img src="/images/jobs/lesart/1.jpg" width="466" height="257" alt=""
                                         className="job__image"/>
                                </div>
                                <div className="job__images_wrapper">
                                    <img src="/images/jobs/lesart/2.jpg" width="466" height="257" alt=""
                                         className="job__image"/>
                                </div>
                                <div className="job__images_wrapper">
                                    <img src="/images/jobs/lesart/3.jpg" width="466" height="257" alt=""
                                         className="job__image"/>
                                </div>
                                <div className="job__images_wrapper">
                                    <img src="/images/jobs/lesart/4.jpg" width="466" height="257" alt=""
                                         className="job__image"/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="jobs__item">
                        <div className="job">
                            <h4 className="job__title">
                                Объект №3
                            </h4>
                            <div className="job__text">
                                <p>
                                    Установка и проведение работ на станциях железной дороги. <br/>
                                    За 2014 год установлено около 40 новых сплит-систем и мульти-сплит систем и
                                    проведено сервисное обслуживание более 120 сплит-систем.
                                </p>
                            </div>
                            <div className="jobs__line">
                                <div className="jobs__half">
                                    <div className="job__subtitle">
                                        Станция №1
                                    </div>
                                    <div className="job__text">
                                        <p>
                                            Проведение срочного ремонта сплит-<br/>
                                            системы билетной кассы станции<br/>
                                        </p>
                                    </div>
                                    <div className="job__images">
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/rzd/1.jpg" width="222" height="124"
                                                 alt="оао цппк (ржд)"
                                                 className="job__image"/>
                                        </div>
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/rzd/2.jpg" width="222" height="124"
                                                 alt="оао цппк (ржд)"
                                                 className="job__image"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="jobs__half">
                                    <div className="job__subtitle">
                                        №2
                                    </div>
                                    <div className="job__text">
                                        <p>
                                            Усановка новой сплит-системы в<br/>
                                            билетную кассу
                                            <br/>
                                        </p>
                                    </div>
                                    <div className="job__images">
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/rzd/3.jpg" width="222" height="124"
                                                 alt="оао цппк (ржд)"
                                                 className="job__image"/>
                                        </div>
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/rzd/4.jpg" width="222" height="124"
                                                 alt="оао цппк (ржд)"
                                                 className="job__image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobs__line">
                                <div className="jobs__half">
                                    <div className="job__subtitle">
                                        №3
                                    </div>
                                    <div className="job__text">
                                        <p>
                                            Установка 3-ех новых сплит-систем
                                        </p>
                                    </div>
                                    <div className="job__images">
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/rzd/5.jpg" width="222" height="124"
                                                 alt="оао цппк (ржд)"
                                                 className="job__image"/>
                                        </div>
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/rzd/6.jpg" width="222" height="124"
                                                 alt="оао цппк (ржд)"
                                                 className="job__image"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="jobs__half">
                                    <div className="job__subtitle">
                                        №4
                                    </div>
                                    <div className="job__text">
                                        <p>
                                            Установка новой сплит-системы
                                        </p>
                                    </div>
                                    <div className="job__images">
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/rzd/7.jpg" width="222" height="124"
                                                 alt="оао цппк (ржд)"
                                                 className="job__image"/>
                                        </div>
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/rzd/8.jpg" width="222" height="124"
                                                 alt="оао цппк (ржд)"
                                                 className="job__image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jobs__item">
                        <div className="jobs__line">
                            <div className="jobs__half">
                                <div className="job">
                                    <div className="job__title">
                                        Объект №4
                                    </div>
                                    <div className="job__text">
                                        <p>
                                            Сервисное обслуживание и ремонт сплит-систем и холодильного оборудования.
                                        </p>
                                    </div>
                                    <div className="job__images">
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/milk/1.jpg" width="222" height="124" alt=""
                                                 className="job__image"/>
                                        </div>
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/milk/2.jpg" width="222" height="124" alt=""
                                                 className="job__image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobs__half">
                                <div className="job">
                                    <div className="job__title">
                                        Объект №5
                                    </div>
                                    <div className="job__text">
                                        <p>
                                            Сервисное обслуживание и ремонт сплит-систем
                                        </p>
                                    </div>
                                    <br/>
                                    <div className="job__images">
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/spec/1.jpg" width="222" height="124" alt="ООО "
                                                 className="job__image"/>
                                        </div>
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/spec/2.jpg" width="222" height="124" alt="ООО "
                                                 className="job__image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jobs__item">
                        <div className="jobs__line">
                            <div className="jobs__half">
                                <div className="job">
                                    <div className="job__title">
                                        Объект №6
                                        <span className="job__title-subline"> </span>
                                    </div>
                                    <div className="job__text">
                                        <p>
                                            <br/>
                                            Диагностика чиллера (холодильной установки) ледовой арены дворца спорта
                                        </p>
                                    </div>
                                    <div className="job__images">
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/bagration/1.jpg" width="451" height="253" alt=""
                                                 className="job__image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobs__half">
                                <div className="job">
                                    <div className="job__title">
                                        Объект №7
                                        <span className="job__title-subline"> </span>
                                    </div>
                                    <div className="job__text">
                                        <p>
                                            <br/>
                                            Провдение диагностики 9-ти рефконтейнеров<br/>
                                            <br/>
                                        </p>
                                    </div>
                                    <div className="job__images">
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/custom/1.jpg" width="451" height="253" alt=" "
                                                 className="job__image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jobs__item">
                        <div className="job">
                            <h4 className="job__title">
                                Объект №8
                            </h4>
                            <div className="job__text">
                                <p>
                                    На обслуживании находится сеть из 8-ми продуктовых магазинов. Обслуживание и ремонт
                                    холодильного оборудования и сплит-систем.
                                </p>
                                <p>
                                    На фото: установка новой сплит-системы Daikin на стадии ремонта нового пивного
                                    магазина и перенос сплит-системы с крыши на стену действующего продуктового магазина
                                    в связи с ремонтом крыши.
                                </p>
                            </div>
                            <div className="job__images">
                                <div className="job__image">
                                    <div className="job__images_wrapper">
                                        <img src="/images/jobs/shop/1.jpg" width="222" height="124"
                                             alt="Сеть продуктовых магазинов" className="job__image"/>
                                    </div>
                                    <div className="job__images_wrapper">
                                        <img src="/images/jobs/shop/2.jpg" width="222" height="124"
                                             alt="Сеть продуктовых магазинов" className="job__image"/>
                                    </div>
                                    <br/>
                                    <div className="job__images_wrapper">
                                        <img src="/images/jobs/shop/3.jpg" width="451" height="253"
                                             alt="Сеть продуктовых магазинов" className="job__image"/>
                                    </div>
                                </div>
                                <div className="job__images_wrapper">
                                    <img src="/images/jobs/shop/4.jpg" width="227" height="384"
                                         alt="Сеть продуктовых магазинов" className="job__image"/>
                                </div>
                                <div className="job__images_wrapper">
                                    <img src="/images/jobs/shop/5.jpg" width="227" height="384"
                                         alt="Сеть продуктовых магазинов" className="job__image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="jobs__title">
                        Выполненные работы
                        <span className="jobs__subtitle">
                        Для частных лиц
                    </span>
                    </h2>
                    <div className="jobs__item">
                        <div className="jobs__line">
                            <div className="jobs__half">
                                <div className="job">
                                    <div className="job__title">
                                        Объект №1
                                    </div>
                                    <div className="job__text">
                                        <p>
                                            <br/>
                                            Установка бу сплит-системы, которую клиент самостоятельно демонтировал у
                                            себя из офиса.
                                        </p>
                                    </div>
                                    <div className="job__images">
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/people/1.jpg" width="222" height="124" alt="   "
                                                 className="job__image"/>
                                        </div>
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/people/2.jpg" width="222" height="124" alt="   "
                                                 className="job__image"/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="jobs__half">
                                <div className="job">
                                    <div className="job__title">
                                        Объект №2
                                        <span className="job__title-subline"> </span>
                                    </div>
                                    <div className="job__text">
                                        <p>
                                            <br/>
                                            Установка сразу 4-ех сплит-систем Daikin в доме и гостевом доме
                                            <br/>
                                            <br/>
                                        </p>
                                    </div>
                                    <div className="job__images">
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/people/3.jpg" width="222" height="124" alt="СНТ "
                                                 className="job__image"/>
                                        </div>
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/people/4.jpg" width="222" height="124" alt="СНТ "
                                                 className="job__image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jobs__item">
                        <div className="jobs__line">
                            <div className="jobs__half">
                                <div className="job">
                                    <div className="job__title">
                                        Объект №3
                                        <span className="job__title-subline"> </span>
                                    </div>
                                    <div className="job__text">
                                        <p>
                                            <br/>
                                            Установка новой сплит-систем Daikin
                                        </p>
                                    </div>
                                    <div className="job__images">
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/people/5.jpg" alt="   " className="job__image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobs__half">
                                <div className="job">
                                    <div className="job__title">
                                        Объект №4
                                    </div>
                                    <div className="job__text">
                                        <p>
                                            <br/>
                                            Ремонт сплит-системы
                                        </p>
                                    </div>
                                    <div className="job__images">
                                        <div className="job__images_wrapper">
                                            <img src="/images/jobs/people/6.jpg" alt="Боровики" className="job__image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jobs__item">
                        <div className="job">
                            <h4 className="job__title">
                                Объект №5
                            </h4>
                            <div className="jobs__half --margin-deny">
                                <div className="job__text">
                                    <p className="--margin">
                                        Работы по просьбе клиента выполнялись в вечернее время. Наружний блок по
                                        просьбе клиента был установлен ниже, что позволило скрыть его от глаз
                                        прохожих. Крепление к нижней балке позволило значительно снизить вибрацию от
                                        него в деревянном доме. В пожарок были установлены резиновые опоры, которыми
                                        не была укомплектована сплит-система.
                                    </p>
                                </div>
                            </div>
                            <div className="jobs__half">
                                <div className="job__images">
                                    <div className="job__images_wrapper">
                                        <img src="/images/jobs/people/7.jpg" alt=" " className="job__image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageLayout(Works)

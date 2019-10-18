import React from 'react';
import PageLayout from "../../Decorators/PageLayout";
import PageComponent from "../../Decorators/PageComponent";
import Modal from '../../UI/Modal';

export class Price extends PageComponent {

    state = {
        isOpen: false
    }

    onToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }


    render() {
        return (
            <div className="prices" id="prices">
                <div className="prices__wrap l-wrap">
                    <h2 className="prices__title">
                        СТОИОМОСТЬ УСЛУГ
                    </h2>
                    <h3 className="prices__quotient">Для физических лиц</h3>
                    <hr className="prices__hr"/>
                </div>
                <div className="prices__wrap l-wrap">
                    <div className="prices__content">
                        <div className="prices__table">
                            <div className="price__tr --title">
                                <div>Наименование</div>
                                <div>Цена, руб</div>
                            </div>
                            <div className="price__tr">
                                <div>Выезд ремонтной бригады</div>
                                <div>2500</div>
                            </div>
                            <div className="price__tr">
                                <div>Диагностика настенного кондиционера мощностью 7-15 Btu/h (от семёрки до
                                    пятнадцатого)
                                </div>
                                <div>1500</div>
                            </div>
                            <div className="price__tr">
                                <div>Диагностика кассетного, подпотолочного, канального и настенного мощностью 15-32
                                    Btu/h (от пятнадцатого до тридцать второго )
                                </div>
                                <div>2000</div>
                            </div>
                            <div className="price__tr">
                                <div>Полная профилактика настенного кондиционера 7-12 Btu/h</div>
                                <div>2500</div>
                            </div>
                            <div className="price__tr">
                                <div>Полная профилактика подпотолочного, кассетного типа мощностью до 24 Btu/h</div>
                                <div>3500</div>
                            </div>
                            <div className="price__tr">
                                <div>Заправка хладагентом (фреоном) R22</div>
                                <div>300 / 100 гр</div>
                            </div>
                            <div className="price__tr">
                                <div>Заправка хладагентом (фреоном) R410a;R407c;R134a</div>
                                <div>500 / 100 гр.</div>
                            </div>
                            <div className="price__tr">
                                <div>Поиск утечек хладагента</div>
                                <div>2000</div>
                            </div>
                            <div className="price__tr">
                                <div>Очистка испарителя с разборкой блока</div>
                                <div>2000</div>
                            </div>
                            <div className="price__tr">
                                <div>Мойка наружного блока, мойкой высокого давления (типа Керхер)</div>
                                <div>1500</div>
                            </div>
                            <div className="price__tr">
                                <div>Замена пускового/рабочего конденсатора (цена зависит от доступа)</div>
                                <div>от 1500</div>
                            </div>
                            <div className="price__tr">
                                <div>Замена предохранителя (цена зависит от доступа)</div>
                                <div>от 1000</div>
                            </div>
                            <div className="price__tr">
                                <div>Замена реле, контактора</div>
                                <div>от 1500</div>
                            </div>
                            <div className="price__tr">
                                <div>Замена компрессора</div>
                                <div>от 5000</div>
                            </div>
                            <div className="price__tr">
                                <div>Замена двигателя вентилятора, вентилятора внутреннего блока</div>
                                <div>1800</div>
                            </div>
                            <div className="price__tr">
                                <div>Замена двигателя вентилятора, вентилятора внешнего блока</div>
                                <div>от 2500</div>
                            </div>
                            <div className="price__tr">
                                <div>Чистка дренажной системы</div>
                                <div>800</div>
                            </div>
                            <div className="price__tr">
                                <div>Замена реле, контактора</div>
                                <div>от 1500</div>
                            </div>
                            <div className="price__tr">
                                <div>Замена дренажного насоса</div>
                                <div>1500</div>
                            </div>
                            <div className="price__tr">
                                <div>Запайка медных трубок</div>
                                <div>500 / точка</div>
                            </div>
                            <div className="price__tr">
                                <div>Перевальцовка трассы</div>
                                <div>1000</div>
                            </div>
                            <div className="price__tr">
                                <div>Ремонт платы управления</div>
                                <div>от 1000</div>
                            </div>
                            <div className="price__tr">
                                <div>Замена платы управления внутреннего блока</div>
                                <div>от 2500</div>
                            </div>
                            <div className="price__tr">
                                <div>Замена инверторной платы</div>
                                <div>от 3500</div>
                            </div>
                        </div>
                        <div className="prices__order">
                            <div className="prices-order">
                                <div className="prices-order__text">
                                    <p>
                                        Оставьте заявку на проведение предварительной диагностики<br/>
                                        и определения необходимых работ
                                    </p>
                                </div>
                                <div className="prices-order__button" onClick={this.onToggle}>
                                    <span className="i-button i-button--yellow-small">
                                        ОСТАВИТЬ ЗАЯВКУ
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className="prices__quotient">Для корпоративных клиентов</h3>
                    <hr className="prices__hr"/>
                    <div className="prices__content">
                        <div className="prices__text">
                            Расчет стоимости ремонта и обслуживания систем вентиляции и кондиционирования зависит от
                            нескольких факторов:
                        </div>
                        <div className="prices__text">
                            <ul className="list list--dark">
                                <li className="list__item">
                                    Класса вентиляционной системы (бытовая, полупромышленная, промышленная и т.д.);
                                </li>
                                <li className="list__item">
                                    Типа вентиляции и холодильного оборудования;
                                </li>
                                <li className="list__item">
                                    Частоты обслуживания вентиляционных систем (разовое, полугодовое, квартальное,
                                    ежемесячное);
                                </li>
                                <li className="list__item">
                                    Мощности и производительности установки;
                                </li>
                                <li className="list__item">
                                    Сложности работ, возможности доступа к оборудования и его состояния;
                                </li>
                                <li className="list__item">
                                    Производителя оборудования и качества монтажа.
                                </li>
                            </ul>
                        </div>
                        <div className="prices__order">
                            <div className="prices-order">
                                <div className="prices-order__text">
                                    <p>
                                        Оставьте заявку для получения консультации нашего эксперта
                                        и точный расчет необходимых работ
                                    </p>
                                </div>
                                <div className="prices-order__button">
                                    <span className="i-button i-button--yellow-small" onClick={this.onToggle}>
                                        ОСТАВИТЬ ЗАЯВКУ
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.isOpen} toggleModal={this.onToggle}/>
            </div>)
    }
}

export default PageLayout(Price);
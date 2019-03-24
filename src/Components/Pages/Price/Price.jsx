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
                    <div className="prices__content" id="prices-for-people">
                        <table className="prices__table">
                            <tbody>
                            <tr>
                                <th>Наименование</th>
                                <th>Цена, руб</th>
                            </tr>
                            <tr>
                                <td>Выезд ремонтной бригады</td>
                                <td>2500</td>
                            </tr>
                            <tr>
                                <td>Диагностика настенного кондиционера мощностью 7-15 Btu/h (от семёрки до
                                    пятнадцатого)
                                </td>
                                <td>1500</td>
                            </tr>
                            <tr>
                                <td>Диагностика кассетного, подпотолочного, канального и настенного мощностью 15-32
                                    Btu/h (от пятнадцатого до тридцать второго )
                                </td>
                                <td>2000</td>
                            </tr>
                            <tr>
                                <td>Полная профилактика настенного кондиционера 7-12 Btu/h</td>
                                <td>2500</td>
                            </tr>
                            <tr>
                                <td>Полная профилактика подпотолочного, кассетного типа мощностью до 24 Btu/h</td>
                                <td>3500</td>
                            </tr>
                            <tr>
                                <td>Заправка хладагентом (фреоном) R22</td>
                                <td>300 / 100 гр</td>
                            </tr>
                            <tr>
                                <td>Заправка хладагентом (фреоном) R410a;R407c;R134a</td>
                                <td>500 / 100 гр.</td>
                            </tr>
                            <tr>
                                <td>Поиск утечек хладагента</td>
                                <td>2000</td>
                            </tr>
                            <tr>
                                <td>Очистка испарителя с разборкой блока</td>
                                <td>2000</td>
                            </tr>
                            <tr>
                                <td>Мойка наружного блока мойкой высокого давления (типа Керхер)</td>
                                <td>1500</td>
                            </tr>
                            <tr>
                                <td>Замена пускового/рабочего конденсатора (цена зависит от доступа)</td>
                                <td>от 1500</td>
                            </tr>
                            <tr>
                                <td>Замена предохранителя (цена зависит от доступа)</td>
                                <td>от 1000</td>
                            </tr>
                            <tr>
                                <td>Замена реле, контактора</td>
                                <td>от 1500</td>
                            </tr>
                            <tr>
                                <td>Замена компрессора</td>
                                <td>от 5000</td>
                            </tr>
                            <tr>
                                <td>Замена двигателя вентилятора, вентилятора внутреннего блока</td>
                                <td>1800</td>
                            </tr>
                            <tr>
                                <td>Замена двигателя вентилятора, вентилятора внешнего блока</td>
                                <td>от 2500</td>
                            </tr>
                            <tr>
                                <td>Чистка дренажной системы</td>
                                <td>800</td>
                            </tr>
                            <tr>
                                <td>Замена реле, контактора</td>
                                <td>от 1500</td>
                            </tr>
                            <tr>
                                <td>Замена дренажного насоса</td>
                                <td>1500</td>
                            </tr>
                            <tr>
                                <td>Запайка медных трубок</td>
                                <td>500 / точка</td>
                            </tr>
                            <tr>
                                <td>Перевальцовка трассы</td>
                                <td>1000</td>
                            </tr>
                            <tr>
                                <td>Ремонт платы управления</td>
                                <td>от 1000</td>
                            </tr>
                            <tr>
                                <td>Замена платы управления внутреннего блока</td>
                                <td>от 2500</td>
                            </tr>
                            <tr>
                                <td>Замена инверторной платы</td>
                                <td>от 3500</td>
                            </tr>
                            </tbody>
                        </table>
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
                    <h3 className="prices__quotient">Для корпоратичных клиентов</h3>
                    <hr className="prices__hr"/>
                    <div className="prices__content" id="prices-for-company">
                        <div className="prices__text">
                            Расчет стоимости ремонта и обслуживания систем вентиляции и кондиционирования зависит от
                            нескольких факторов:
                        </div>
                        <div className="prices__list">
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
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
                                <td>Монтаж бытовых кондиционеров</td>
                                <td>от 7000</td>
                            </tr>
                            <tr>
                                <td>Диагностика неисправности бытовых кондиционеров</td>
                                <td>от 1000</td>
                            </tr>
                            <tr>
                                <td>Дозаправка/полная заправка бытовых кондиционеров</td>
                                <td>от 1500</td>
                            </tr>
                            <tr>
                                <td>Обслуживание и ремонт бытовых кондиционеров</td>
                                <td>от 1500</td>
                            </tr>
                            <tr>
                                <td>Обслуживание кассетных, напольно-потолочных кондиционеров</td>
                                <td>от 2500</td>
                            </tr>
                            <tr>
                                <td>Обслуживание канальных кондиционеров</td>
                                <td>от 3000</td>
                            </tr>
                            <tr>
                                <td>Обслуживание и ремонт прочей климатической и холодильной техники</td>
                                <td>договорная</td>
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
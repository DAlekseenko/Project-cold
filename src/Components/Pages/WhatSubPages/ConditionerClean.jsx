import React from 'react';
import PageLayout from "../../Decorators/PageLayout";
import PageComponent from "../../Decorators/PageComponent";
import Container from "./Components/Contaner"
import Header from "./Components/Header"
import Img from "./Components/Img"
import PriceList from "./Components/PriceList"
import Content from "./Components/Content"
import Consultation from "../../UI/Consultation"
import Breadcrumbs from "../../UI/Breadcrumbs"

class ConditionerClean extends PageComponent {

    src = "/images/service/vnt24-title-konditsionery-service-cleaning.jpg"

    priceList = [
        {
            name: 'зависит от сложности',
            price: 'от 550 руб'
        },
    ];

    render() {
        return (
            <Container>
                <Header h1={this.h1}/>
                <Breadcrumbs title={this.h1}/>
                <Img src={this.src} addClass={'design-img'} title={this.h1}/>
                <PriceList header='Стоимость чистки кондиционера' list={this.priceList}/>
                <Content>
                    <h2>Чистка и дезинфекция кондиционера</h2>
                    <p>
                        Представьте, какой объем воздуха бытовой кондиционер пропускает за час работы.
                        Производительность промышленного агрегата в разы больше. Воздух, поступающий в климатическую
                        систему, не может быть чистым. Подаваемый из кондиционера в помещение воздух чище, благодаря
                        штатным фильтрам. А дальше срабатывает простая арифметика: куда деваются вся пыль, газы,
                        ядовитые смолы, тяжелые металлы, микроорганизмы? Они оседают на фильтрах и воздуховодах. А
                        значит, услуги по дезинфекции и чистке кондиционеров в Москве будут пользоваться постоянным
                        спросом.
                    </p>

                    <h3>Почему необходима чистка?</h3>
                    <p>
                        Когда фильтр или воздушные пути климат-системы механически забиваются, они просто перестают
                        пропускать воздух. Зажмите ладонью трубу рабочего пылесоса и вы увидите, насколько сильно
                        возрастает потребляемая мощность этого бытового прибора. В случае с кондиционером он еще и
                        перестанет всасывать и выдавать охлажденный воздух, а значит, эффективность его работы стремится
                        к нулю. Возрастает нагрузка на электросеть и силовые агрегаты, которые начинают работать на
                        износ.
                    </p>
                    <p>
                        Во время эксплуатации системы кондиционера всасывают и задерживают:
                    </p>
                    <ul>
                        <li>пыль</li>
                        <li>растительный пух</li>
                        <li>мелких насекомых</li>
                        <li>грибки</li>
                        <li>бактерии и вирусы</li>
                        <li>жиры, образовавшиеся в результате всасывания газообразных веществ. Особенно
                            распространены жировые отложения в промышленных климат-системах, где состав воздуха зависит
                            от специфики производства (кухня, ресторан, химический цех и пр.)
                        </li>
                    </ul>
                    <p>
                        Тараканы, жуки, осы и мухи любят устраивать гнезда в магистрали кондиционера, полостях внешнего
                        и внутреннего блоков. Образующийся в результате неправильной работы теплообменника иней и лед
                        становятся причинами течи внутреннего блока. Наружный блок загрязняется птичьим пометом,
                        мусором, пылью и насекомыми.
                    </p>

                    <h3>Дезинфекция кондиционера</h3>
                    <p>
                        Задачей чистки является освобождение воздуховодов и подвижных частей климатического оборудования
                        от препятствий. Вычищенный кондиционер работает хорошо, но без дезинфекции он может стать
                        источником заразы. Накопившиеся в системе микроорганизмы (вирусы, бактерии, грибки) не
                        улавливаются механическими фильтрами, и, размножившись, вместе с потоком воздуха попадают в
                        помещение. Возрастает опасность для здоровья и санитарного состояния помещений, колонии
                        микроорганизмов становятся источником неприятного запаха.
                        Дезинфекция – это антибактериальная чистка с помощью горячего пара и дезинфицирующих средств.
                        Последние бывают опасны и для человека, поэтому проводить антибактериальную чистку нужно с
                        соблюдением строгих мер предосторожности.
                    </p>

                    <h3>У кого можно заказать чистку кондиционеров в Москве?</h3>
                    <p>
                        Наша компания поможет избавить климатическую систему любой сложности и назначения от жира, пыли,
                        бактерий и прочих инородных накоплений, препятствующих нормальной работе и создающих угрозу
                        санитарному состоянию объекта. У нас можно недорого заказать очистку домашнего и промышленного
                        кондиционера, а также системы воздуховодов и вентиляции, в которую он интегрирован. При этом мы
                        гарантируем такие конкурентные преимущества:
                    </p>
                    <ul>
                        <li>Оперативный выезд специалиста или бригады (в зависимости от объема работы и сложности
                            климат-системы) в удобное для заказчика время
                        </li>
                        <li>Оплата только по результатам работы в зависимости от их объемов. В стоимость нашей услуги не
                            входит очистка тех узлов оборудования, которые в ней не нуждаются
                        </li>
                        <li>Высокий профессионализм, благодаря которому чистка производится быстро и качественно</li>
                        <li>Клиентоориентированность: обходительное обращение с заказчиком, вследствие которого вам
                            обязательно захочется пригласить нас снова
                        </li>
                    </ul>
                </Content>
                <Consultation/>
            </Container>
        )
    }
}

export default PageLayout(ConditionerClean);
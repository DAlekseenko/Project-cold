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

class ChillerInstall extends PageComponent {

    src = "/images/service/fon_block1.jpg"

    priceList = [
        {
            name: 'до 6 кВт',
            price: '1400-2900 руб/шт'
        },
        {
            name: 'до 100 кВт',
            price: 'от 20 000 руб'
        },
        {
            name: 'от 100 до 250 кВт',
            price: 'от 25 000 руб'
        },
    ];

    render() {
        return (
            <Container>
                <Header h1={this.h1}/>
                <Breadcrumbs title={this.h1}/>
                <Img src={this.src} addClass={'design-img'} title={this.h1}/>
                <PriceList header='Стоимость монтажа чиллеров и файнколов' list={this.priceList}/>
                <Content/>
                <Consultation/>
            </Container>
        )
    }
}

export default PageLayout(ChillerInstall);
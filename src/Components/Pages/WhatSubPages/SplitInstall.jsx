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

class SplitInstall extends PageComponent {

    src = "/images/service/montaz.jpg"

    priceList = [
        {
            name: 'в зависимости от оборудования',
            price: 'от 6000 руб'
        },
    ];

    render() {
        return (
            <Container>
                <Header h1={this.h1}/>
                <Breadcrumbs title={this.h1}/>
                <Img src={this.src} addClass={'design-img'} title={this.h1}/>
                <PriceList header='Стоимость монтажа спилт систем' list={this.priceList}/>
                <Content/>
                <Consultation/>
            </Container>
        )
    }
}

export default PageLayout(SplitInstall);
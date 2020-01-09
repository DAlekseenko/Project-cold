import * as React from 'react';
import {YMaps, Map, Placemark} from "react-yandex-maps";
import PageComponent from "../../Decorators/PageComponent"
import PageLayout from "../../Decorators/PageLayout"

const mapData = {
    center: [55.813228, 37.461481],
    zoom: 11,
};

const coordinates = [
    [55.813228, 37.461481],
];

const contactData = [
    'ООО "ПРОЕКТ ХОЛОД"',
    'Адрес: 125367, г Москва, проезд Врачебный, 10',
    '+7 (909) 953-43-67',
    '5080701@list.ru'
]

export class Contacts extends PageComponent {
    render() {
        return (<div className="contacts_layout">
                <div className="prices__wrap l-wrap">
                    <h1 className="what__title">
                        <span className="header-title__line2">{this.h1}</span>
                    </h1>
                    <div className="contacts_wrapper">
                        <div className="what__list">
                            <ul className="list list--dark">
                                {contactData.map((item, index) => <li key={index} className="list__item">{item}</li>)}
                            </ul>
                        </div>
                        <div className="map_wrapper">
                            <YMaps>
                                <Map state={mapData}>
                                    {coordinates.map((coordinate, i) => <Placemark key={i} geometry={coordinate}/>)}
                                </Map>
                            </YMaps>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageLayout(Contacts)
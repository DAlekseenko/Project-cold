import * as React from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";
import PageComponent from "../../Decorators/PageComponent"
import PageLayout from "../../Decorators/PageLayout"

const mapData = {
    center: [55.751574, 37.573856],
    zoom: 5,
};

const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521]
];

export class Contacts extends PageComponent {

    render() {
        return (<div className="prices">
                <div className="prices__wrap l-wrap">
                    <h1 className="prices__title what__title">
                        Контакты
                    </h1>
                    <div>
                        <ul>
                            <li>ООО "ПРОЕКТ ХОЛОД"</li>
                            <li>Адрес: 125367, г Москва, проезд Врачебный, 10, пом III</li>
                            <li>+7 (909) 953-43-67</li>
                        </ul>
                        <YMaps>
                            <Map defaultState={mapData}>
                                {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                            </Map>
                        </YMaps>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageLayout(Contacts)
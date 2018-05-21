import React, {Component} from 'react';


export default class Footer extends Component {

    render = () =>
        <footer className="footer" id="footer">
            <div className="footer__wrap l-wrap">
                <div className="footer__logo">
                    <div className="logo logo--white">&nbsp;&nbsp;Название</div>
                </div>
                <div className="footer__text">
                    <p>&copy; 2018</p>
                    <p>Все права защищены <a href="#777"></a></p>
                    <p><a href="#777"></a></p>
                </div>
                <div className="footer__phone">
                    8 (000) 000-00-00
                </div>
            </div>
        </footer>
}
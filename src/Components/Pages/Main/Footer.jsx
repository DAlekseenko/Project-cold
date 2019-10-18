import React from 'react';


export default () =>
        <footer className="color_wrapper" id="footer">
            <div className="footer">
                <div className="footer__logo">
                    <div className="logo logo--white">&nbsp;&nbsp;Проект Холод
                    <p className="cp">&copy; {(new Date()).getFullYear()}</p>
                    </div>
                </div>
                <div className="footer__phone">
                    +7 (909) 953-43-67
                </div>
            </div>
        </footer>

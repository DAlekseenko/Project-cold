import React from 'react';

export default () => {
    const handleCall = () => {
        if (window.ym) {
            window.ym(52948192, 'reachGoal', 'call');
        }
    }
    return (
    <footer className="color_wrapper" id="footer">
        <div className="footer">
            <div className="footer__info">
                Проект Холод
                <span className="footer__copy">&copy; {(new Date()).getFullYear()}</span>
            </div>
            <div className="footer__info">info@proekt-xolod.ru</div>
            <div className="footer__info">
                <div onTouchStart={handleCall}>+7 (909) 953-43-67</div>
            </div>
        </div>
    </footer>)
}

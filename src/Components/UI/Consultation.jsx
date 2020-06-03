import React from "react"
import FormFeedback from "./FormFeedback"


export default function Consultation() {
    return (
        <div className="consultation wide-bg" id="consultation">
            <div className="consultation__wrap l-wrap">
                <h2 className="header-title">
                        <span className="header-title__line3">
                             Получите бесплатную
                        </span>
                    <span className="header-title__line2">
                            консультацию
                        </span>
                </h2>
                <p className="header__text">
                    ЭКСПЕРТА по сервисному обслуживанию вашей системы
                </p>
                <div className="consultation__form">
                    <FormFeedback
                        formClass="form"
                        inputWrapClass="form__line"
                        inputClass="form__input"
                        buttonWrapClass="form__button"
                        buttonClass="i-button i-button--yellow"
                    />
                </div>
            </div>
        </div>
    );
}

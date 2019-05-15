import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import FormFeedback from './FormFeedback';

export default function Modal({isOpen, toggleModal}) {
    return (
        <ReactModal isOpen={isOpen} onRequestClose={toggleModal} ariaHideApp={false}>
            <div className="modal">
                <div className="modal__text">
                        Получите бесплатную консультацию специалиста
                        по сервисному обслуживанию вашей системы
                </div>
                <div className="modal__form">
                    <FormFeedback
                        formClass="form"
                        inputWrapClass="form__line"
                        inputClass="form__input required"
                        buttonWrapClass="form__button modal__button"
                        buttonClass="i-button i-button--yellow"
                    />
                </div>
                <div className='modal-close' onClick={toggleModal}/>
            </div>
        </ReactModal>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired
}

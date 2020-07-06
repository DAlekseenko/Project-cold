import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';


export default function ImageModal({src, alt, toggleModal}) {
    return (
        <ReactModal className="modal-img_wrapper" isOpen={!!src} onRequestClose={toggleModal} ariaHideApp={false}
                    style={{overflow: 'hidden'}}>
            <img className="modal-content__img" src={src} alt={alt}/>
            <i className="fa fa-close fa-lg close-icon" onClick={toggleModal}/>
        </ReactModal>
    );
}

ImageModal.propTypes = {
    src: PropTypes.string,
    toggleModal: PropTypes.func.isRequired
}

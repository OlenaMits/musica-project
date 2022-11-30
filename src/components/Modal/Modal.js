import React from "react";
import PropTypes from 'prop-types';
import { ReactComponent as CrossIcon } from './images/cross.svg';

import "./Modal.scss";

const Modal = (props) => {
    const { 
        show, 
        handleClose, 
        header, 
        closeButton, 
        text, 
        actions, 
        backgroundColor 
    } = props;

    return(
        <>
            <div className={`modal ${show ? "display-block" : "display-none"}`} tabIndex="-1" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content" style={{ backgroundColor }}>
                        <div className="modal-header">
                            <h5 className="modal-title">{header}</h5>
                            {closeButton && (
                                <button
                                    type="button" 
                                    className="btn-close" 
                                    onClick={handleClose}
                                >
                                    <CrossIcon/>
                                </button>
                            )}
                        </div>
                        <div className="modal-body">
                            <p>{text}</p>
                            <div className="btn-group">
                            {actions}
                            </div>
                        </div>         
                    </div>
                </div>
            </div>
            <div 
                className={`modal-backdrop ${show ? "display-block" : "display-none"}`} 
                onClick={handleClose}
            />
        </>
    )
};

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    closeButton: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    actions: PropTypes.element.isRequired,
};

Modal.defaultProps = {
    header: 'Add to Cart',
    backgroundColor: '#aedaa6',
};

export default Modal;
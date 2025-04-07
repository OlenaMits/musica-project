import React from 'react';
import PropTypes from 'prop-types';

import "./Button.scss"

const Button = ({ backgroundColor, text, onClick, className }) => {
    return (
        <button 
            onClick={ onClick } 
            className={`btn ${className || ''}`}
            style={{ backgroundColor }}
        > 
            { text }
        </button>
    )
};

Button.defaultProps = {
    className: '',
    backgroundColor: '#aedaa6',
    text: 'Ok',
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;
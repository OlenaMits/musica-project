import React from "react";
import PropTypes from 'prop-types';

import "./List.scss";

const List = ({ children }) => {
    if(children.length === 0) {
        return <div className="list-text">
            Cart is empty
        </div>;
    } else {
        return(
            <ul className="list">
                {children}
            </ul>
        )
    }
};

List.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default List;
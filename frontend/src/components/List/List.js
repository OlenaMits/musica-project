import React, { useContext } from "react";
import PropTypes from 'prop-types';
import { Container } from "@mui/material";

import Button from "../Button/Button";
import { ListContext } from "../../context/listContext";
import { LIST_TYPE_TABLE, LIST_TYPE_LIST } from "../../helpers/constants";
import "./List.scss";

const List = ({ children }) => {
    const { type, handleChangeType } = useContext(ListContext);

    if(children.length === 0) {
        return (
            <div className="list-text">
                Oops... Choose your musical instrument
            </div>
        );
    } else {
        return(
            <Container>
                <Button 
                    backgroundColor={type === LIST_TYPE_TABLE ? "#83a77c" : "#aedaa6"}  
                    text={type === LIST_TYPE_TABLE ? "Table" :"List"} 
                    onClick={() => {
                        handleChangeType(type === LIST_TYPE_TABLE ? LIST_TYPE_LIST : LIST_TYPE_TABLE)
                    }} 
                    className="btn-toggle"
                />
                <ul className={type === LIST_TYPE_TABLE ? "list-column" : "list"}>
                    {children}
                </ul>
            </Container>
        )
    }
};

List.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default List;
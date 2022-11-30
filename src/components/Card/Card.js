import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { ReactComponent as Favorite } from './images/star.svg';
import { ReactComponent as FavoriteYellow } from './images/yellow-star.svg';
import { removeFavorite, addFavorite } from "../../store/actions/favoritesActions";
import { removeCart, addCart} from "../../store/actions/cartActions";
import { openModal, closeModal } from "../../store/actions/modalActions";

import Button from "../Button/Button";
import Modal from "../Modal/Modal";

import "./Card.scss"

const Card = ({ 
    title, 
    price, 
    url, 
    article, 
    color, 
    isFavorite, 
    isCart,
}) => {
    const dispatch = useDispatch();
    const isModalOpened = useSelector((state) => state.modal.isOpened);
    const currentArticulModal = useSelector((state) => state.modal.currentArticul);

    const handleClickFavorite = () => {
        if(isFavorite) {
            dispatch(removeFavorite(article));
        } else {
            dispatch(addFavorite(article));
        }
    };

    const handleClickCart = () => {
        if(isCart) {
            dispatch(removeCart(article));
        } else {
            dispatch(addCart(article));
        }
    };

    const showModal = () => {
        dispatch(openModal(article));
    };

    const hideModal = () => {
        dispatch(closeModal(article));
    };

    return(
        <div className="card">
            <div 
                className="favorite" 
                onClick={handleClickFavorite}
            >
                <div className="heart" style={{ color: isFavorite ? "yellow" : "transparent"}}>
                    <Favorite/>
                    <FavoriteYellow/>
                </div>
            </div>
            <div className="photo">
                <img src={url} alt={title}/>
            </div>
            <div className="description">
                <div className="title-info">
                    <h2 className="title">{title}</h2>
                    <h4>{color}</h4>
                </div>
                <p>Article: {article}</p>
                <div className="price">
                    <h1>${price}</h1>
                    <Button 
                        backgroundColor={isCart ? "#aedaa6" :"transparent"} 
                        text={isCart ? "Delete" : "Add to Cart"}
                        onClick={showModal} 
                        className="button"
                    />
                    <Modal 
                        show={isModalOpened && currentArticulModal === article}
                        handleClose={hideModal}
                        backgroundColor='#aedaa6'
                        header='Add to Cart' 
                        text={isCart ? `Do you want to delete ${title.toUpperCase()}?` : `Do you want to add ${title.toUpperCase()}?`}
                        closeButton
                        actions={
                            <>
                                <Button 
                                    text='Ok' 
                                    onClick={() => {
                                        handleClickCart();
                                        hideModal();
                                    }} 
                                    backgroundColor='rgba(0, 0, 0, 0.25)' 
                                    className="btn-modal"/>
                                <Button 
                                    text='Cancel' 
                                    onClick={hideModal} 
                                    backgroundColor='rgba(0, 0, 0, 0.25)' 
                                    className="btn-modal"/>
                            </>
                        }
                    />
                </div>
            </div>
        </div>
    )
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    article: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isCart: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
};

Card.defaultProps = {
    color: "transparent",
};

export default Card;
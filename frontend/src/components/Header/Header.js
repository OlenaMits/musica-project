import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as Logo } from './images/musician-guitar-player.svg';
import { ReactComponent as Favorite } from './images/favorite.svg';
import { ReactComponent as Cart } from './images/cart.svg';
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
    const favorites = useSelector((state) => state.favorites);
    const cart = useSelector((state) => state.cart);

    return(
        <div className="header" data-testid="app-header">
            <div className="container">
                <div className="header-logo">
                    <Link to="/">
                        <Logo/>
                        <p>Musica</p>
                    </Link>
                </div>
                <div className="header-btns">
                    <div className="favorite">
                        <Link to="favorite">
                            <Favorite/>
                        </Link>
                        <div className="counter">{favorites.length || ""}</div>
                    </div>
                    <div className="cart">
                        <Link to="cart">
                            <Cart/>
                        </Link>
                        <div className="counter">{cart.length || ""}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;
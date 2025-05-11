// @ts-nocheck
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import List from "../../components/List/List";
import Card from "../../components/Card/Card";
import { StyledBox, StyledButton, ActionBox } from "./CartPage.styles";

const CartPage = () => {
  const goods = useSelector((state) => state.goods);
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);
  
  const navigate = useNavigate();

  return(
    <>
      <StyledBox>
        <h1>Your cart</h1>
      </StyledBox>
      <List>
        {goods.reduce((result, item) => {
          const { 
              title,
              color,
              price,
              articul,
              url 
          } = item;
          if(cart && cart.includes(articul)) {
              return [...result, (
                  <Card 
                      key={articul}
                      title={title} 
                      color={color} 
                      price={price} 
                      article={articul} 
                      url={url}
                      isFavorite={favorites.includes(articul)}
                      isCart={cart.includes(articul)}
                  />
              )]
          } else {
              return result;
          }
        }, [])}
      </List>
      <ActionBox>
        <StyledButton
          text="Continue shopping"
          onClick={() => navigate('/')}
        />
        <StyledButton
          text="Payment"
          onClick={() => navigate('/payment')}
        />
      </ActionBox>
    </>
  )
};

export default CartPage;
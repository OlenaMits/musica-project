import React from "react";
import { useSelector } from "react-redux";

import List from "../../components/List/List";
import Card from "../../components/Card/Card";

const FavoritesPage = () => {
  const goods = useSelector((state) => state.goods);
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);
  
  return(
    <List>
      {goods
        .filter(({ articul }) => favorites.includes(articul))
        .map(({
          title,
          color,
          price,
          articul,
          url,
        }, index) => {
          return (
            <Card 
              key={index}
              title={title} 
              color={color} 
              price={price} 
              article={articul} 
              url={url}
              isFavorite={favorites.includes(articul)}
              isCart={cart.includes(articul)}
            />
          )})
      }
    </List>
  )
};

export default FavoritesPage;
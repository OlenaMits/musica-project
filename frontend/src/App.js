import React, { useEffect } from "react";
import { StyledEngineProvider } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ListProvider from "./context/listContext";
import LocalStorage from "./services/localStorageService";
import { getGoods } from "./store/actions/goodsActions";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import CartPage from "./pages/CartPage";
import OrderConfirmation from "./pages/OrderConfirmation";

const ls = new LocalStorage();

const App = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getGoods());
  }, [dispatch])

  useEffect(() => {
    ls.set("favorites", JSON.stringify(favorites));
  }, [favorites]);
  
  useEffect(() => {
    // ls.set("cart", JSON.stringify(cart));
  }, [cart]);
 
  return(
    <StyledEngineProvider injectFirst>
      <ListProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout/>
          }>
            <Route 
              index 
              element={
                <HomePage/>
            }/>
            <Route 
              path="favorite" 
              element={
                <FavoritesPage/>
            }/>
            <Route 
              path="cart" 
              element={
                <CartPage/>
            }/>
            <Route
              path="order-confirmation"
              element={
                <OrderConfirmation/>
            }/>
          </Route>
        </Routes>
      </ListProvider>
    </StyledEngineProvider>
  )
}

export default App;
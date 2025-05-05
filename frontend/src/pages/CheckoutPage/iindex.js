/* eslint-disable no-unused-vars */
// @ts-nocheck
import React from "react";
import { useSelector } from "react-redux";

import { Box } from "@mui/material";

const CheckoutPage = () => {
  const goods = useSelector((state) => state.goods);
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);
  
  return(
    <>
      <Box>
        <h1>CheckoutPage</h1>
      </Box>
  </>
  )
};

export default CheckoutPage;
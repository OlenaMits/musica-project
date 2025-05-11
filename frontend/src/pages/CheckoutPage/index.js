/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, MenuItem, Select, Container, Link } from '@mui/material';
import { clearCart } from "../../store/actions/cartActions";

import { StyledBox, StyledButton, PaymentWrapper, Title, CardsWrapper, FormBox } from "./CheckoutPage.styles";
import SVG from "./SVG/SVG";
import SVGPayPall from "./SVG/SVGPayPall";
import SVGMaestro from "./SVG/SVGMaestro";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .required('Name is required'),
  surname: yup
    .string('Enter your surname')
    .required('Surname is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  address: yup
    .string('Enter your address')
    .required('Address is required'),
  city: yup
    .string('Enter your city')
    .required('City is required'),
  postalCode: yup
    .string('Enter your postal code')
    .required('Postal code is required'),
  phone: yup
    .string('Enter your phone number')
    .min(10, 'Phone should be of minimum 10 characters length')
    .max(10, 'Phone should be of minimum 10 characters length')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
  cardNumber: yup
  .string()
  .required('Card number is required')
  .matches(/^\d{16}$/, 'Card number must be 16 digits'),
  cardHolder: yup
    .string()
    .required('Card holder name is required'),

  cvv: yup
    .string()
    .required('CVV is required')
    .matches(/^\d{3,4}$/, 'CVV must be 3 or 4 digits'),

  month: yup
    .string()
    .required('Month is required'),

  year: yup
    .string()
    .required('Year is required'),
});

const CheckoutPage = () => {
  const goods = useSelector((state) => state.goods);
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      address: '',
      city: '',
      postalCode: '',
      phone: '',
      cardNumber: '',
      cardHolder: '',
      cvv: '',
      month: '',
      year: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const purchased = goods.filter(({ articul }) => cart.includes(articul));
      const order = {
        client: values,
        cart: purchased,
      }
      console.log(order);

      dispatch(clearCart());
      navigate("/order-confirmation");
    },
  });

  return(
    <>
      <StyledBox>
        <h1>Checkout Page</h1>
      </StyledBox>
      <StyledBox 
        component="form" 
        onSubmit={formik.handleSubmit} 
      >
        <FormBox>
          <TextField 
            label="Name" 
            variant="outlined"
            id="name"
            name="name"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField 
            label="Surname" 
            variant="outlined"
            id="surname"
            name="surname"
            fullWidth
            value={formik.values.surname}
            onChange={formik.handleChange}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
          />
        </FormBox>
        <FormBox>
          <TextField 
            label="Email" 
            variant="outlined"
            id="email"
            name="email"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField 
            label="Phone Number" 
            variant="outlined"
            id="phone"
            name="phone"
            fullWidth
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </FormBox>
        <TextField 
          label="Address" 
          variant="outlined"
          id="address"
          name="address"
          fullWidth
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
        <FormBox>
          <TextField 
            label="City" 
            variant="outlined"
            id="city"
            name="city"
            fullWidth
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          />
          <TextField 
            label="Postal Code" 
            variant="outlined"
            id="postalCode"
            name="postalCode"
            fullWidth
            value={formik.values.postalCode}
            onChange={formik.handleChange}
            error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
            helperText={formik.touched.postalCode && formik.errors.postalCode}
          />
        </FormBox>
        <PaymentWrapper>
				  <Title>Please select your payment method</Title>
				  <p className="total-payment">Total payment amount</p>
				  <CardsWrapper>
            <SVG />
            <SVGPayPall />
            <SVGMaestro />
				  </CardsWrapper>
          <div className="flex-block">
            <span className="info">Card number</span>
            <TextField 
              variant="standard"
              id="cardNumber"
              name="cardNumber"
              value={formik.values.cardNumber}
              onChange={formik.handleChange}
              error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
              helperText={formik.touched.cardNumber && formik.errors.cardNumber} 
            />
          </div>
          <div className="flex-block">
            <span className="info">Card holder name</span>
            <TextField 
              variant="standard"
              id="cardHolder"
              name="cardHolder"
              value={formik.values.cardHolder}
              onChange={formik.handleChange}
              error={formik.touched.cardHolder && Boolean(formik.errors.cardHolder)}
              helperText={formik.touched.cardHolder && formik.errors.cardHolder}
            />
          </div>
          <div className="flex-select">
            <span className="info"> Card Expiry Date </span>
            <Select 
              name="month"
              value={formik.values.month}
              onChange={formik.handleChange}
              error={formik.touched.month && Boolean(formik.errors.month)}
            >
              <MenuItem value=""><em>Month</em></MenuItem>
              <MenuItem value={'01'}>01</MenuItem>
              <MenuItem value={'02'}>02</MenuItem>
              <MenuItem value={'03'}>03</MenuItem>
              <MenuItem value={'04'}>04</MenuItem>
              <MenuItem value={'05'}>05</MenuItem>
              <MenuItem value={'06'}>06</MenuItem>
              <MenuItem value={'07'}>07</MenuItem>
              <MenuItem value={'08'}>08</MenuItem>
              <MenuItem value={'09'}>09</MenuItem>
              <MenuItem value={'10'}>10</MenuItem>
              <MenuItem value={'11'}>11</MenuItem>
              <MenuItem value={'12'}>12</MenuItem>
            </Select>
            /
            <Select 
              name="year"
              value={formik.values.year}
              onChange={formik.handleChange}
              error={formik.touched.year && Boolean(formik.errors.year)}
            >
              <MenuItem value=""><em>Year</em></MenuItem>
              <MenuItem value={'2025'}>2025</MenuItem>
              <MenuItem value={'2026'}>2026</MenuItem>
              <MenuItem value={'2027'}>2027</MenuItem>
              <MenuItem value={'2028'}>2028</MenuItem>
              <MenuItem value={'2029'}>2029</MenuItem>
              <MenuItem value={'2030'}>2030</MenuItem>
              <MenuItem value={'2031'}>2031</MenuItem>
              <MenuItem value={'2032'}>2032</MenuItem>
              <MenuItem value={'2033'}>2033</MenuItem>
              <MenuItem value={'2034'}>2034</MenuItem>
              <MenuItem value={'2035'}>2035</MenuItem>
            </Select>
          </div>
          <div className="cvv">
            <span className="info">CVC/CVV/CID </span>
            <TextField
              variant="standard"
              sx={{
                width: '50px',
                paddingRight: '60px',
              }}
              id="cvv"
              name="cvv"
              value={formik.values.cvv}
              onChange={formik.handleChange}
              error={formik.touched.cvv && Boolean(formik.errors.cvv)}
              helperText={formik.touched.cvv && formik.errors.cvv}
            />
            <Link
              sx={{
                textDecoration: 'none',
                color: 'black',
                fontWeight: 'bold',
              }}
              href="https://help.gopay.com/en/knowledge-base/security/what-is-cvv-cvc-code-and-where-can-i-find-it-on-my-card"
            >
              What is cvv
            </Link>
          </div>
			  </PaymentWrapper>
        <StyledButton 
          backgroundColor="#aedaa6"
          text="Complite order"
          onClick={formik.handleSubmit}
          type="button"
        />
      </StyledBox>
    </>
  )
};

export default CheckoutPage;
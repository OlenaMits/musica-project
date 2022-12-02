import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField } from '@mui/material';

import List from "../../components/List/List";
import Card from "../../components/Card/Card";
import { StyledBox, StyledButton } from "./CartPage.styles";
import { clearCart } from "../../store/actions/cartActions";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .required('Name is required'),
  surname: yup
    .string('Enter your surname')
    .required('Surname is required'),
  age: yup
    .number('Enter your age')
    .max(300)
    .required('Age is required'),
  address: yup
    .string('Enter your address')
    .required('Address is required'),
  phone: yup
    .string('Enter your phone number')
    .min(10, 'Phone should be of minimum 10 characters length')
    .max(10, 'Phone should be of minimum 10 characters length')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
});


const CartPage = () => {
  const goods = useSelector((state) => state.goods);
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);
  
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      age: '',
      address: '',
      phone: '',
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
    },
  });

  return(
    <>
      {cart.length > 0 && (
        <StyledBox 
          component="form" 
          onSubmit={formik.handleSubmit} 
        >
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
          <TextField 
            label="Age" 
            variant="outlined"
            id="age"
            name="age"
            fullWidth
            value={formik.values.age}
            onChange={formik.handleChange}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age}
          />
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
          <StyledButton 
            backgroundColor="#aedaa6"
            text="Checkout"
            onClick={formik.handleSubmit}
            type="button"
          />
        </StyledBox>
      )}
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
    </>
  )
};

export default CartPage;
import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import './CartContainer.css';
import { currencyFormat } from '../Utils/MoneyFormat';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import cartImg from '../../../assets/img/cart.png';

export const CartContainer = () => {

  const { cart, removeItem } = useContext(CartContext);

  const [cartItems, setCartItems] = useState([]);

  const removeOfCart = (item) => {
    removeItem(item);
  }

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  return (
    cart.length > 0 ?
    <TableContainer className='table-container' component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow className='header-table'>
            <TableCell colSpan={2}>Producto</ TableCell>
            <TableCell>Precio</ TableCell>
            <TableCell align="center">Cantidad</ TableCell>
            <TableCell></ TableCell>
          </ TableRow>
        </ TableHead>
        <TableBody>
          {cartItems?.map((item) => (
            <TableRow key={item.productId}>
              <TableCell>
                <Box className='img-container-product-table'>
                  <img className='img-product-table' src={item.pictures[0].url} alt={item.title} loading="lazy" />
                </Box>
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{currencyFormat(item.price)}</TableCell>
              <TableCell align="center">{item.quantity}</TableCell>
              <TableCell>
                <IconButton onClick={() => {removeOfCart(item)}}>
                  <RemoveCircleOutlineOutlinedIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          <TableRow className='footer-table'>
            <TableCell colSpan={2} align="center">Total</TableCell>
            <TableCell colSpan={2} align="center">{currencyFormat(cartItems.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0))}</TableCell>
          </TableRow>
        </TableBody>
      </ Table>
    </ TableContainer>
    :
    <Box className='img-empty-cart-container'>
      <img className='img-empty-cart' src={cartImg} alt='empty cart' />
      <Typography className='msg-main-empty-cart'>¡Ups! Tu carrito está vacío</Typography>
      <Typography className='msg-empty-cart'>{'Añade un producto :)'}</Typography>
    </Box>
  )
}

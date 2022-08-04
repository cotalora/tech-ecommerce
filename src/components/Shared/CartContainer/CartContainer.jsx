import { Box } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import './CartContainer.css';
import { currencyFormat } from '../Utils/MoneyFormat';

export const CartContainer = () => {

  const { cart } = useContext(CartContext);

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCartItems(cart);
    
    setTotal(cart.reduce((acc, curr) => {
      return acc + (curr.price * curr.quantity);
    }, 0));
  }, [cart]);

  return (
    <Box className='cart-product-main-container'>
      {
        cartItems?.map((item) => (
          <div key={item.productId}>
            <Box className='cart-product-container'>
              <Box className='cart-product-image'>
                <img src={item.pictures[0].url} alt={item.title} loading="lazy" />
              </ Box>
              <Box className='cart-product-title'>
                {item.title}
              </ Box>
              <Box className='cart-product-quantity'>
                {item.quantity}
              </ Box>
              <Box className='cart-product-price'>
                {currencyFormat(item.price)}
              </ Box>
            </ Box>
          </div>
        ))
      }
      <h1>Total: {currencyFormat(total)}</h1>
    </ Box>
  )
}

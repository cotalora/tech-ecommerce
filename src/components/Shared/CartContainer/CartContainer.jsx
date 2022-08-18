import { Alert, Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Paper, Snackbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../contexts/CartContext';
import './CartContainer.css';
import { currencyFormat } from '../Utils/MoneyFormat';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import cartImg from '../../../assets/img/cart.png';
import { Timestamp } from 'firebase/firestore';
import { addOrder, getProduct, updateProduct } from '../../../service/firebase/firestore';

export const CartContainer = () => {

  const { cart, removeItem, clear } = useContext(CartContext);

  const [cartItems, setCartItems] = useState([]);
  const [isLoadingCart, setIsLoadingCart] = useState(false);
  const [alertMsg, setAlertMsg] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  })

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
    });
  };

  const createOrder = () => {
    if (formData.name && formData.phone && formData.email) {

      const objOrder = {
        buyer: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        },
        items: cartItems,
        total: cartItems.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0),
        date: Timestamp.fromDate(new Date())
      }

      setIsLoadingCart(true);

      addOrder(objOrder).then(() => {
        objOrder.items.map(item => {
          return getProduct(item.productId).then(resGet => {
            updateProduct(item.productId, { initial_quantity: resGet.data().initial_quantity - item.quantity }).then(() => {
              clear();
              setIsLoadingCart(false);
              handleCloseDialog();
              setAlertMsg({ type: 'success', msg: 'Orden creada correctamente' });
            }).catch(() => {
              setIsLoadingCart(false);
              setAlertMsg({ type: 'error', msg: 'Error, la orden no se ha podido crear' });
            });
          }).catch(() => {
            setIsLoadingCart(false);
            setAlertMsg({ type: 'error', msg: 'Error, la orden no se ha podido crear' });
          });
        });
      }).catch(() => {
        setIsLoadingCart(false);
        setAlertMsg({ type: 'error', msg: 'Error, la orden no se ha podido crear' });
      });
    }
  }

  const removeOfCart = (item) => {
    removeItem(item);
  }

  const handleInputChangeForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  return (
    <>
      {
        isLoadingCart &&
        <Box className='loading-progress'>
          <CircularProgress />
        </Box>
      }

      {
        cart.length > 0 ?
          <>
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
                        <IconButton onClick={() => { removeOfCart(item) }}>
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
            <Box className='buttons-container'>
              <Button className='button-clear' variant="outlined" onClick={clear}>Vaciar carrito</Button>
              <Button className='button-create' variant="outlined" onClick={handleClickOpenDialog}>Realizar orden</Button>
            </Box>
          </>
          :
          <Box className='img-empty-cart-container'>
            <img className='img-empty-cart' src={cartImg} alt='empty cart' />
            <Typography className='msg-main-empty-cart'>¡Ups! Tu carrito está vacío</Typography>
            <Typography className='msg-empty-cart'>{'Añade un producto :)'}</Typography>
          </Box>
      }

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Completa tu orden</DialogTitle>
        <DialogContent>
          <form className='form-checkout-container'>
            <TextField required type="text" error={formData.name === undefined ||
              formData.name === null || formData.name === ''} label="Nombre" variant="filled"
              onChange={handleInputChangeForm} name="name" />
            <TextField required type="text" error={formData.email === undefined ||
              formData.email === null || formData.email === ''} label="Correo" variant="filled"
              onChange={handleInputChangeForm} name="email" />
            <TextField required type="number" error={formData.phone === undefined ||
              formData.phone === null || formData.phone === ''} label="Teléfono" variant="filled"
              onChange={handleInputChangeForm} name="phone" />
          </form>
        </DialogContent>
        <DialogActions className='buttons-dialog-container'>
          <Button className='button-clear' onClick={handleCloseDialog}>Cancelar</Button>
          <Button className='button-create' onClick={createOrder}>Realizar orden</Button>
        </DialogActions>
      </Dialog>

      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={alertMsg?.msg?.length > 0} autoHideDuration={6000} onClose={() => { setAlertMsg('') }}>
        <Alert variant="filled" severity={alertMsg.type} sx={{ width: '100%' }}>
          {alertMsg.msg}
        </Alert>
      </Snackbar>
    </>
  )
}

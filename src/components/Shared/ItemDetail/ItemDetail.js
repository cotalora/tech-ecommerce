import './ItemDetail.css';
import { Alert, Box, Button, Snackbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import { currencyFormat } from '../Utils/MoneyFormat';
import Carousel from 'react-material-ui-carousel';

function ItemDetail({ productId, pictures, title, price, stockQuantity }) {
    const [alertMsg, setAlertMsg] = useState('');
    const [itemIsAdd, setItemIsAdd] = useState(false);
    const [quantityItemDetail, setQuantityItemDetail] = useState(1);
    const [itemToCart, setItemToCart] = useState(null);
    const navigate = useNavigate();

    const onAddToCart = () => {
        setItemToCart({
            productId: productId,
            title: title,
            price: price,
            quantity: quantityItemDetail,
            pictures: pictures
        });
    }

    useEffect(() => {
        if (itemToCart) {
            setItemIsAdd(true);
            console.log(itemToCart); // Producto agregado al carrito
        }
    }, [itemToCart]);

    return (
        <Box className='item-main-container'>
            <Box className='carousel-container'>
                <Carousel
                    interval={5000}>
                    {
                        pictures?.map((step, index) => (
                            <div key={step.id}>
                                <Box className='background-image-item'>
                                    <img src={step.url} alt={title} loading="lazy" />
                                </Box>
                            </div>
                        ))
                    }
                </Carousel>
            </Box>
            <Box className="info-item-container">
                <Typography className='category-text'>CELULARES Y SMARTPHONES</Typography>
                <Box className='tittle-price-container'>
                    <Typography className='tittle-text'>{title}</Typography>
                    <Box>
                        <Typography className='tittle-price'>{currencyFormat(price)}</Typography>
                        <Typography className='quantity-text'>
                            <span>Stock: </span>
                            {stockQuantity}
                        </Typography>
                    </Box>
                    <Typography className='description-text'>
                        <span>Descripción: </span>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit justo enim, aptent convallis fusce dignissim mollis facilisi diam aenean dui vivamus.
                    </Typography>
                </Box>
                <Box className="buttons-cart-container">
                    {
                        !itemIsAdd ?
                            <>
                                <ItemCount stock={stockQuantity} showAlertMsg={setAlertMsg} onAdd={setQuantityItemDetail} />
                                <Button className="button-add-to-cart" onClick={onAddToCart}>
                                    Añadir al carrito
                                </Button>
                            </> :
                            <>
                                <Button className="button-add-to-cart" onClick={() => navigate('/cart')}>
                                    Ir al carrito
                                </Button>
                            </>
                    }
                </Box>
            </Box>
            <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={alertMsg.length > 0} autoHideDuration={6000} onClose={() => { setAlertMsg('') }}>
                <Alert variant="filled" severity="warning" sx={{ width: '100%' }}>
                    {alertMsg}
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default ItemDetail;
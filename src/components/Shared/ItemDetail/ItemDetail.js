import './ItemDetail.css';
import { Alert, Box, Button, MobileStepper, Snackbar, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ItemCount from '../ItemCount/ItemCount';
import { currencyFormat } from '../Utils/MoneyFormat';

function ItemDetail({ productId, pictures, title, price, stockQuantity }) {
    const [activeStep, setActiveStep] = useState(0);
    const [alertMsg, setAlertMsg] = useState('');
    const [itemIsAdd, setItemIsAdd] = useState(false);
    const [quantityItemDetail, setQuantityItemDetail] = useState(1);
    const [itemToCart, setItemToCart] = useState(null);

    const theme = useTheme();
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    const navigate = useNavigate();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

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
            // console.log(itemToCart); // Producto agregado al carrito
        }
    }, [itemToCart]);

    return (
        <Box className='item-main-container'>
            <Box className='carousel-container'>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    interval={60000}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {pictures?.map((step, index) => (
                        <div key={step.id}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box className='background-image-item'>
                                    <img src={step.url} alt={title} loading="lazy" />
                                </Box>
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={pictures?.length || 0}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === pictures?.length - 1}
                        >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                        </Button>
                    }
                />
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
                                <ItemCount stock={stockQuantity} showAlertMsg={setAlertMsg} onSetQuantityToItemDetail={setQuantityItemDetail} />
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
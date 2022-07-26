import ItemDetail from '../ItemDetail/ItemDetail.js';
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';

function ItemDetailContainer() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoadingProducts, setIsLoadingProducts] = useState(true);

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${id}`, {
            method: 'GET'
        }).then(res => {
            res.json().then(resJson => {
                console.log(resJson);
                setProduct(resJson);
            });
        }).catch(err => {
            console.error(err);
        }).finally(() => {
            setIsLoadingProducts(false);
        });
    }, []);

    if (isLoadingProducts) {
        return (
            <div className='progress-container'>
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </div>
        );
    }

    return (
        <div>
            <ItemDetail productId={product?.id} pictures={product?.pictures} />
        </div>
    );
}

export default ItemDetailContainer;
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
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
                setProduct(resJson);
            });
        }).catch(err => {
            console.error(err);
        }).finally(() => {
            setIsLoadingProducts(false);
        });
    }, [id]);

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
            <ItemDetail productId={product?.id} pictures={product?.pictures} 
                title={product?.title} price={product?.price} stockQuantity={product?.initial_quantity}/>
        </div>
    );
}

export default ItemDetailContainer;
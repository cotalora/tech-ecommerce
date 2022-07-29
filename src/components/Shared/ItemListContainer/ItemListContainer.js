import './ItemListContainer.css';
import { Alert, Box, CircularProgress, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(true);

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MCO/search?category=MCO1051', {
            method: 'GET'
        }).then(res => {
            res.json().then(resJson => {
                setProducts(resJson.results);
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
        <div className='item-list-container'>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;
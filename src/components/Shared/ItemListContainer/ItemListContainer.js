import './ItemListContainer.css';
import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(true);

    useEffect(() => {
        setProducts([]);
        setIsLoadingProducts(true);
        
        fetch(`https://api.mercadolibre.com/sites/MCO/search?category=${id ? id : 'MCO1051'}`, {
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
        <div className='item-list-container'>
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;
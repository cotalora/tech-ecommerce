import './ItemListContainer.css';
import { Alert, Box, CircularProgress, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../../productsAsyncMock';

function ItemListContainer() {
    const [alertMsg, setAlertMsg] = useState('');
    const [products, setProducts] = useState([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(true);

    useEffect(() => {
        getProducts().then(res => {
            setProducts(res)
        }).catch(err => {
            console.error(err);
        }).finally(() => {
            setIsLoadingProducts(false);
        })
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
        <>
            <ItemList products={products} />
            {/*<Snackbar open={alertMsg.length > 0} autoHideDuration={6000} onClose={() => { setAlertMsg('') }}>
                <Alert variant="filled" severity="warning" sx={{ width: '100%' }}>
                    {alertMsg}
                </Alert>
            </Snackbar>*/}
        </>
    );
}

export default ItemListContainer;
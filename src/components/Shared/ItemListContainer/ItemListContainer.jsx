import './ItemListContainer.css';
import { Box, CircularProgress } from '@mui/material';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { useFetchProducts } from '../../../hooks/useFetchProducts';

function ItemListContainer() {
    const { id } = useParams();
    const { products, loading } = useFetchProducts(id);

    /*
    useEffect(() => {
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
    */

    return (
        <>
            {
                loading ?
                    <div className='progress-container'>
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                    </div>
                    :
                    <div className='item-list-container'>
                        <ItemList products={products} />
                    </div>
            }
        </>
    );
}

export default ItemListContainer;
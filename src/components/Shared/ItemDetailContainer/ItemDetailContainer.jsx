import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom";
import { Box, CircularProgress } from '@mui/material';
import { useFetchProduct } from '../../../hooks/useFetchProduct.js';

function ItemDetailContainer() {

    const { id } = useParams();
    const { product, loading } = useFetchProduct(id);

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
                    <div>
                        <ItemDetail productId={product?.id} pictures={product?.pictures || [{ id: 1, url: product?.thumbnail }]}
                            title={product?.title} price={product?.price} stockQuantity={product?.initial_quantity} />
                    </div>
            }
        </>
    );
}

export default ItemDetailContainer;
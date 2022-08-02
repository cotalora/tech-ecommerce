import { Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, showAlertMsg, onSetQuantityToItemDetail }) {
    let [quantity, setQuantity] = useState(1);

    const onAdd = (stock) => {
        if (stock > 0) {
            if (quantity < stock) {
                setQuantity(quantity = quantity + 1);
                showAlertMsg('');
                onSetQuantityToItemDetail(quantity);
            }
            else {
                setQuantity(quantity);
                showAlertMsg('Cantidad no puede superar el Stock');
            }
        }
        else {
            showAlertMsg('No hay Stock');
        }
    }

    const onSubst = (stock) => {
        if (stock > 0) {
            if (quantity > 1) {
                setQuantity(quantity = quantity - 1);
                onSetQuantityToItemDetail(quantity);
            }
            else {
                setQuantity(1);
                showAlertMsg('Cantidad no puede ser inferior al Stock');
            }
        }
        else {
            showAlertMsg('No hay Stock');
        }
    }

    return (
        <ButtonGroup className='counter-container' variant="outlined" aria-label="outlined button group">
            <Button className='button-count' onClick={() => { onSubst(stock) }}>-</Button>
            <Button className='button-text-count' disabled>{stock > 0 ? quantity : 0}</Button>
            <Button className='button-count' onClick={() => { onAdd(stock) }}>+</Button>
        </ButtonGroup>
    )
}

export default ItemCount;
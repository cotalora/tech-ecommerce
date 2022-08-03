import { Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, showAlertMsg, onAdd }) {
    let [quantity, setQuantity] = useState(1);

    const onAddQuantity = (stock) => {
        if (stock > 0) {
            if (quantity < stock) {
                setQuantity(quantity = quantity + 1);
                showAlertMsg('');
                onAdd(quantity);
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

    const onSubstQuantity = (stock) => {
        if (stock > 0) {
            if (quantity > 1) {
                setQuantity(quantity = quantity - 1);
                onAdd(quantity);
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
            <Button className='button-count' onClick={() => { onSubstQuantity(stock) }}>-</Button>
            <Button className='button-text-count' disabled>{stock > 0 ? quantity : 0}</Button>
            <Button className='button-count' onClick={() => { onAddQuantity(stock) }}>+</Button>
        </ButtonGroup>
    )
}

export default ItemCount;
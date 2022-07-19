import { Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';
import './ItemCount.css';

function ItemCount(props) {
    const { stock } = props;
    const { showAlertMsg } = props;
    let [quantity, setQuantity] = useState(1);

    const validAdd = (stock) => {
        if (stock > 0) {
            if (quantity < stock) {
                setQuantity(quantity = quantity + 1);
                showAlertMsg('');
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

    const validSubst = (stock) => {
        if (stock > 0) {
            if (quantity > 0) {
                setQuantity(quantity = quantity - 1);
            }
            else {
                setQuantity(0);
                showAlertMsg('Cantidad no puede ser inferior al Stock');
            }
        }
        else {
            showAlertMsg('No hay Stock');
        }
    }

    return (
        <ButtonGroup className='counter-container' variant="outlined" aria-label="outlined button group">
            <Button className='button-count' onClick={() => { validSubst(stock) }}>-</Button>
            <Button className='button-text-count' disabled>{stock > 0 ? quantity : 0}</Button>
            <Button className='button-count' onClick={() => { validAdd(stock) }}>+</Button>
        </ButtonGroup>
    )
}

export default ItemCount;
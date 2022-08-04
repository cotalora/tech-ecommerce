import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { IconButton } from '@mui/material';
import { CartContext } from '../../../contexts/CartContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

function CartWidget() {
    const { getItemsQuantity } = useContext(CartContext);
    const navigate = useNavigate();

    const quantity = getItemsQuantity();

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    return (
        <IconButton aria-label="cart" onClick={() => navigate('/cart')}>
            <StyledBadge badgeContent={quantity} color="error">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    )
}

export default CartWidget;
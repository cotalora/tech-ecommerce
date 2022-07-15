import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { IconButton } from '@mui/material';

function CartWidget() {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    return (
        <IconButton aria-label="cart">
        <StyledBadge badgeContent={4} color="error">
            <ShoppingCartIcon />
        </StyledBadge>
    </IconButton>
    )
}

export default CartWidget;
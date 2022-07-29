import './Item.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { currencyFormat } from '../Utils/MoneyFormat';

function Item(props) {
    const { id } = props;
    const { imgUrl } = props;
    const { category } = props;
    const { name } = props;
    const { price } = props;

    const navigate = useNavigate();

    return (
        <Card className="card-container">
            <CardActionArea onClick={() => navigate(`/item/${id}`)}>
                <CardMedia
                    component="img"
                    image={imgUrl}
                    alt="Producto"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {category}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Precio: {currencyFormat(price)}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default Item;
import './Item.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { currencyFormat } from '../Utils/MoneyFormat';

function Item({ id, imgUrl, category, name, price }) {

    const navigate = useNavigate();

    return (
        <Card className="card-container">
            <CardActionArea onClick={() => navigate(`/item/${id}`)}>
                <CardMedia
                    component="img"
                    image={imgUrl}
                    alt="Producto"
                    loading="lazy"
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
import './Item.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Item(props) {
    const { id } = props;
    const { imgUrl } = props;
    const { category } = props;
    const { name } = props;
    const { price } = props;
    const { stock } = props;

    const navigate = useNavigate();

    return (
        <Card>
            <CardActionArea onClick={() => navigate(`/${id}`)}>
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
                    <Typography variant="body2" color="text.secondary">
                        Precio: {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Stock: {stock}
                    </Typography>
                    {/*<ItemCount initial={x.initialQ} stock={x.stock} showAlertMsg={(evt) => { setAlertMsg(evt) }} />*/}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default Item;
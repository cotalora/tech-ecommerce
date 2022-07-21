import './Item.css';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

function Item(props) {
    const { imgUrl } = props;
    const { category } = props;
    const { name } = props;
    const { price } = props;
    const { stock } = props;

    return (
        <Card>
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
                <Button className='button-add-cart' variant='contained' color='primary'>Ver detalle del producto</Button>
            </CardContent>
        </Card>
    );
}
export default Item;
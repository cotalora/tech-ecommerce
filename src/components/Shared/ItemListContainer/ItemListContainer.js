import { Alert, Button, Card, CardContent, CardMedia, Snackbar, Typography } from '@mui/material';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

function ItemListContainer() {
    const products = [
        {
            "id": 1,
            "name": "Xiaomi Redmi Note 11",
            "category": "Smartphone",
            "stock": 17,
            "initialQ": 1,
            "price": 789899,
            "imgUrl": "https://itechcolombia.co/wp-content/uploads/2022/05/Redmi-Note-11-Gris-Grafito.png"
        },
        {
            "id": 2,
            "name": "Xiaomi Redmi Note 11",
            "category": "Smartphone",
            "stock": 0,
            "initialQ": 1,
            "price": 789899,
            "imgUrl": "https://itechcolombia.co/wp-content/uploads/2022/05/Redmi-Note-11-Gris-Grafito.png"
        },
        {
            "id": 3,
            "name": "Xiaomi Redmi Note 11",
            "category": "Smartphone",
            "stock": 17,
            "initialQ": 1,
            "price": 789899,
            "imgUrl": "https://itechcolombia.co/wp-content/uploads/2022/05/Redmi-Note-11-Gris-Grafito.png"
        },
        {
            "id": 4,
            "name": "Xiaomi Redmi Note 11",
            "category": "Smartphone",
            "stock": 2,
            "initialQ": 1,
            "price": 789899,
            "imgUrl": "https://itechcolombia.co/wp-content/uploads/2022/05/Redmi-Note-11-Gris-Grafito.png"
        },
        {
            "id": 5,
            "name": "Xiaomi Redmi Note 11",
            "category": "Smartphone",
            "stock": 9,
            "initialQ": 1,
            "price": 789899,
            "imgUrl": "https://itechcolombia.co/wp-content/uploads/2022/05/Redmi-Note-11-Gris-Grafito.png"
        },
        {
            "id": 6,
            "name": "Xiaomi Redmi Note 11",
            "category": "Smartphone",
            "stock": 17,
            "initialQ": 1,
            "price": 789899,
            "imgUrl": "https://itechcolombia.co/wp-content/uploads/2022/05/Redmi-Note-11-Gris-Grafito.png"
        },
        {
            "id": 7,
            "name": "Xiaomi Redmi Note 11",
            "category": "Smartphone",
            "stock": 17,
            "initialQ": 1,
            "price": 789899,
            "imgUrl": "https://itechcolombia.co/wp-content/uploads/2022/05/Redmi-Note-11-Gris-Grafito.png"
        },
        {
            "id": 8,
            "name": "Xiaomi Redmi Note 11",
            "category": "Smartphone",
            "stock": 11,
            "initialQ": 1,
            "price": 789899,
            "imgUrl": "https://itechcolombia.co/wp-content/uploads/2022/05/Redmi-Note-11-Gris-Grafito.png"
        },
        {
            "id": 9,
            "name": "Xiaomi Redmi Note 11",
            "category": "Smartphone",
            "stock": 17,
            "initialQ": 1,
            "price": 789899,
            "imgUrl": "https://itechcolombia.co/wp-content/uploads/2022/05/Redmi-Note-11-Gris-Grafito.png"
        },
        {
            "id": 10,
            "name": "Xiaomi Redmi Note 11",
            "category": "Smartphone",
            "stock": 17,
            "initialQ": 1,
            "price": 789899,
            "imgUrl": "https://itechcolombia.co/wp-content/uploads/2022/05/Redmi-Note-11-Gris-Grafito.png"
        }
    ];

    const [alertMsg, setAlertMsg] = useState('')

    return (
        <>
            {
                products.map(x => (
                    <div key={x.id} className='main-card-container'>
                        <Card>
                            <CardMedia
                                component="img"
                                image={x.imgUrl}
                                alt="Producto"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {x.category}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                    {x.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Precio: {x.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Stock: {x.stock}
                                </Typography>
                                <ItemCount initial={x.initialQ} stock={x.stock} showAlertMsg={(evt) => { setAlertMsg(evt) }} />
                                <Button className='button-add-cart' variant='contained' color='primary'>Agregar al carrito</Button>
                            </CardContent>
                        </Card>
                    </div>
                ))
            }
            <Snackbar open={alertMsg.length > 0} autoHideDuration={6000} onClose={() => {setAlertMsg('')}}>
                <Alert variant="filled" severity="warning" sx={{ width: '100%' }}>
                    {alertMsg}
                </Alert>
            </Snackbar>
        </>
    );
}

export default ItemListContainer;
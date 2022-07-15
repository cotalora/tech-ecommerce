import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import './ItemListContainer.css';

function ItemListContainer() {
    const products = [
        {
            "id": 1,
            "name": "Xiaomi Redmi Note 11",
            "category": "Smartphone",
            "price": 789899,
            "imgUrl": "https://itechcolombia.co/wp-content/uploads/2022/05/Redmi-Note-11-Gris-Grafito.png"
        },
        {
            "id": 2,
            "name": "Xiaomi Redmi Note 11",
            "category": "Smartphone",
            "price": 789899,
            "imgUrl": "https://itechcolombia.co/wp-content/uploads/2022/05/Redmi-Note-11-Gris-Grafito.png"
        },
        {
            "id": 3,
            "name": "Xiaomi Redmi Note 11",
            "category": "Smartphone",
            "price": 789899,
            "imgUrl": "https://itechcolombia.co/wp-content/uploads/2022/05/Redmi-Note-11-Gris-Grafito.png"
        },
        {
            "id": 4,
            "name": "Xiaomi Redmi Note 11",
            "category": "Smartphone",
            "price": 789899,
            "imgUrl": "https://itechcolombia.co/wp-content/uploads/2022/05/Redmi-Note-11-Gris-Grafito.png"
        },
        {
            "id": 5,
            "name": "Xiaomi Redmi Note 11",
            "category": "Smartphone",
            "price": 789899,
            "imgUrl": "https://itechcolombia.co/wp-content/uploads/2022/05/Redmi-Note-11-Gris-Grafito.png"
        },
        {
            "id": 6,
            "name": "Xiaomi Redmi Note 11",
            "category": "Smartphone",
            "price": 789899,
            "imgUrl": "https://itechcolombia.co/wp-content/uploads/2022/05/Redmi-Note-11-Gris-Grafito.png"
        },
        {
            "id": 6,
            "name": "Xiaomi Redmi Note 11",
            "category": "Smartphone",
            "price": 789899,
            "imgUrl": "https://itechcolombia.co/wp-content/uploads/2022/05/Redmi-Note-11-Gris-Grafito.png"
        },
        {
            "id": 6,
            "name": "Xiaomi Redmi Note 11",
            "category": "Smartphone",
            "price": 789899,
            "imgUrl": "https://itechcolombia.co/wp-content/uploads/2022/05/Redmi-Note-11-Gris-Grafito.png"
        },
        {
            "id": 6,
            "name": "Xiaomi Redmi Note 11",
            "category": "Smartphone",
            "price": 789899,
            "imgUrl": "https://itechcolombia.co/wp-content/uploads/2022/05/Redmi-Note-11-Gris-Grafito.png"
        }
    ];
    return products.map(x => (
        <div className='main-card-container'>
            <Card key={x.id}>
                    <CardMedia
                        component="img"
                        height="140"
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
                    </CardContent>
            </Card>
        </div>
    ))
        ;
}

export default ItemListContainer;
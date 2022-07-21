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

export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    })
}
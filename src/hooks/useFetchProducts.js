import { useEffect, useState } from "react";
import { getProducts } from "../service/firebase/firestore";

export const useFetchProducts = (id) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getProducts(id).then(products => {
            setProducts(products.map(doc => {
                return { id: doc.id, ...doc.data() };
            }));
        }).catch(err => {
            console.error(err);
        }).finally(() => {
            setLoading(false);
        });
    }, [id])

    return {
        products,
        loading
    }
}

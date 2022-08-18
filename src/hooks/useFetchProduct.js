import { useEffect, useState } from "react";
import { getProduct } from "../service/firebase/firestore";

export const useFetchProduct = (id) => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProduct(id).then(product => {
            setProduct({id: product.id, ...product.data()});
        }).catch(err => {
            console.error(err);
        }).finally(() => {
            setLoading(false);
        });
    }, [id])

    return {
        product,
        loading
    }
}

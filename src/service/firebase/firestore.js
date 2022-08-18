import { getDocs, collection, where, query, doc, getDoc, updateDoc, addDoc } from 'firebase/firestore';
import { db } from '.';

// Productos
export const getProducts = async (id) => {
    const collectionRef = !id
        ? collection(db, 'products')
        : query(collection(db, 'products'), where('category', '==', id));

    return getDocs(collectionRef).then(res => {
        return res.docs;
    });
};
export const getProduct = async (id) => {
    return getDoc((doc(db, 'products', id))).then(res => { return res });
};
export const updateProduct = async (id, data) => {
    return updateDoc(doc(db, 'products', id), data);
};

// Ordenes
export const addOrder = async (objOrder) => {
    return addDoc(collection(db, 'orders'), objOrder);
};
import { createContext, useContext, useState } from "react";
import { NotificationContext } from "./NotificationContext";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {

    const { open, handleOpen } = useContext(NotificationContext);

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        if (!itemIsInCart(item)) {
            setCart([...cart, item]);
        }
        else {
            const itemRef = cart.map(itemP => {
                if (itemP.productId === item.productId) {
                    return { ...itemP, quantity: item.quantity };
                }
                else {
                    return itemP;
                }
            })
            setCart(itemRef);
        }
        handleOpen({msg: 'Producto añadido al carrito', variant: 'success'});
    }

    const getItemsQuantity = () => {
        if (cart.length > 0) {
            return cart.reduce((acc, curr) => {
                return acc + curr.quantity;
            }, 0);
        }
        return 0;
    }

    const getItemQuantity = (id) => {
        return cart.find(x => x?.productId === id)?.quantity;
    }

    const removeItem = (item) => {
        setCart(cart.filter(x => x.productId !== item.productId));
        handleOpen({msg: 'Producto eliminado del carrito', variant: 'success'});
    }

    const clear = () => {
        setCart([]);
    }

    const itemIsInCart = (item) => {
        return cart.some(x => x.productId === item.productId);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, getItemsQuantity, getItemQuantity, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}

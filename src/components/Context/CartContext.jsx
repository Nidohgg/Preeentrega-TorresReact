import { createContext, useState } from "react"

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)){
            let pos = cart.findIndex(producto => producto.id === id);
            cart[pos].quantity += quantity;
            setCart([...cart])
        }else{
            setCart([...cart, {...item, quantity:quantity}])
        }
    }

    const removeItem = () => {
        const items = cart.filter(producto => producto.id != id);
        setCart([...items]);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const CantidadTotalProductos = () => {
        return cart.reduce((acum, producto) => acum += producto.quantity, 0);
    }

    const SumaTotalProductos = () => {
        return cart.reduce((acum, producto) => acum += producto.quantity * producto.precio, 0);
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, CantidadTotalProductos, SumaTotalProductos}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;
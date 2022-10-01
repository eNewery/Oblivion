import React, {createContext, useState} from "react";



export const CartContext = createContext([])
export const useCartContext = () => React.useContext(CartContext)


const CartProvider = ({children}) => {
const [cart, setCart] = useState([])

const addItem = (item, cantidad) => {
    if (isInCart(item.id)) {
        let producto = cart.find(x => x.id === item.id);
        cart[cart.indexOf(producto)].cantidad += cantidad;
        setCart([...cart]);
    } else {
        setCart([...cart, {...item, cantidad:cantidad}]);            
    }
    console.log(cart)
}



const clearCart = () => setCart([])

const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

return(
<CartContext.Provider value={{
    clearCart,
    isInCart,
    removeProduct,
    addItem
}}>
{children}
</CartContext.Provider>
    )
}

export default CartProvider
import React, {createContext, useState} from "react";



export const CartContext = createContext([])
export const useCartContext = () => React.useContext(CartContext)


const CartProvider = ({children}) => {
const [cart, setCart] = useState([])

const addProduct = (item, stock) => {
let newCart;
let product = cart.find(product => product.id === item.id);
if (product) {
    product.stock +=stock;
    newCart = [...cart];
} else {
    product = { ...item, stock: stock}
    newCart = [...cart, product];
}
setCart(newCart)
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
    addProduct
}}>
{children}
</CartContext.Provider>
    )
}

export default CartProvider
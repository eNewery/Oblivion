import React, {createContext, useState} from "react";
export const CartContext = createContext([])
export const useCartContext = () => React.useContext(CartContext)


const CartProvider = ({children}) => {
const [cart, setCart] = useState([])

const addItem = (item, newQuantity) => {
const newCart = cart.filter(prod => prod.id !== item.id);
newCart.push({ ...item, quantity: newQuantity})
setCart(newCart)
}
console.log("carrito: ", cart)

const totalPrice = () => {
return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
}

const clearCart = () => setCart([])

const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

return(
<CartContext.Provider value={{
    totalPrice,
    clearCart,
    isInCart,
    removeProduct,
    addItem,
    cart
}}>
{children}
</CartContext.Provider>
    )
}

export default CartProvider
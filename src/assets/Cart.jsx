import React from "react";
import ItemCart from "./ItemCart"
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";

const Cart = () => {
 const { cart, totalPrice, clearCart } = useCartContext();
console.log(cart)
 if (cart.length === 0) {
    return (
        <div className="cart-noitems">
        <p>There are no items in the cart</p>
        <Link className="btn-finishbuy" to={"/Shop"}>Go to the Shop</Link>
        
        </div>
    )
 }

 return (
<div>
    <div className="btn-clean-container">
<button className="btn-clean" onClick={() => clearCart()}>Clean Cart</button>
</div>
    {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
    }

</div>
 )
}

export default Cart;
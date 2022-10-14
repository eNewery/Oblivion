import React from "react";
import ItemCart from "./ItemCart"
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";
import { tab } from "@testing-library/user-event/dist/tab";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
 const { cart, totalPrice, clearCart } = useCartContext();

const order = {
    buyer: {
name: "",
email: "",
phone:"",
address:""
    },
    items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
}

const sendInfo = () => {
    const db = getFirestore();
    const orders = collection(db, "Orders");
    addDoc(orders, order).then(({ id }) => console.log(id))
}

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
        <Link to={"/Shop"} className="btn-clean">  Come back to Shop </Link>
<button className="btn-clean" onClick={() => clearCart()}>Clean Cart</button>
</div>
    {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
    }
 <div className="total-container">
<p className="total-text"> Total: {totalPrice()}$  </p>
<button onClick={() => sendInfo()} className="btn-buy">Buy!</button>
</div>
</div>
 )
}

export default Cart;

import React from "react";
import ItemCart from "./ItemCart"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
 const { cart, totalPrice, clearCart } = useCartContext();






const sendInfo = () => {
    let nameIn = document.getElementById("name").value;
    let emailIn = document.getElementById("email").value;
    let phoneIn = document.getElementById("contact").value;
    let addressIn = document.getElementById("address").value;
    const order = {
        buyer: {
    name: nameIn,
    email: emailIn,
    phone:phoneIn,
    address:addressIn
        },
        items: cart.map(product => ({ id: product.id, image:product.image, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }
    if (nameIn === "") {
        toast.error("Choose a name!", {
            position:"top-left",
            autoClose: 2000,
        })
    }
    else if (phoneIn === "") {
        toast.error("Choose a phone!", {
            position:"top-left",
            autoClose: 2000,
        })
    }
    else if (emailIn === "") {
        toast.error("Choose a e-mail!", {
            position:"top-left",
            autoClose: 2000,
        })
    }
    else if (addressIn === "") {
        toast.error("Choose Address!", {
            position:"top-left",
            autoClose: 2000,
        })
    }
    else{
        const db = getFirestore();
        const orders = collection(db, "Orders");
        addDoc(orders, order).then(({ id }) => console.log(id))
        toast.success("You have made a purchase!", {
            position:"top-left",
            autoClose: 2000,
        })
    
    }

    

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
    <div className="info-buy">
        <input id="name" placeholder="Name" type="text" /> <input id="contact" placeholder="Contact Number" type="text" /> <input id="email" placeholder="E-mail" type="text" /> <input id="address" placeholder="Address" type="text" />
    </div>
    <div className="total-btn">
<p className="total-text btn-1"> Total: {totalPrice()}$  </p>
<button onClick={() => sendInfo()} className="btn-1">Buy!</button>
<ToastContainer/>
</div>
</div>
</div>
 )
}

export default Cart;

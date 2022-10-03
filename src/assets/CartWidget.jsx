import React from "react";
import { Link } from "react-router-dom";
import cartimg from "../img/cart.png"
import { useCartContext } from "../CartContext";
let CartWidget = () => {
    const { cart } = useCartContext()
    console.log(cart)
    return(
        <Link to={"/Cart"}>
    <div className="cart">
<img className="logo" width={48} id="logo" src={cartimg} alt="" />
<p className="cart-para">{cart.length}</p>
</div>
</Link>
    )
}

export default CartWidget
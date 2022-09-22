import React from "react";
import cart from "../img/cart.png"
let CartWidget = () => {
    return(
    <div className="cart">
<img className="logo" width={48} id="logo" src={cart} alt="" />
<p className="cart-para"></p>
</div>
    )
}

export default CartWidget
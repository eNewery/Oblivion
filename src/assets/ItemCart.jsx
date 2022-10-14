import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCartContext } from "../CartContext";



const ItemCart = ({product}) => {
  const { removeProduct } = useCartContext();
    return (
        <div className="item-cart">
<div><Link to={`/Shop/${product.id}`}><img className="img-cart" src={product.image} alt=""/></Link></div>
<div className="cart-card-content">
    <h2 className="cart-title">Product: {product.title}</h2>
    <p className="cart-paragraph">Quantity: {product.quantity}</p>
    <p className="cart-paragraph">Price by Unit: {product.price}$</p>
    <p className="cart-paragraph">Price: {product.price * product.quantity}$</p>
    <div className="btn-image">
    <button className="btn-delete" onClick={() => removeProduct(product.id)}>Delete from Cart</button>
<a href={product.image}>View image in fullscreen</a>

</div>
</div>
        </div>
)
}

export default ItemCart;
import React, { useState } from "react";


const ItemCount = ({price, initial, stock, onAdd}) => {
const [count, setCount] = useState(initial)


const decrease = () =>{
    setCount(count - 1)
}

const increase = () =>{
    setCount(count + 1);
}
    return(
    <div className="item-count-container">
        <div className="item-count">

            <button disabled={count <= 1} onClick={decrease} className="count-btn btn">-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase} className="count-btn btn">+</button>
        </div>
        <div className="buy-btn">
            <button type="text" onClick={() => onAdd(count)} id="addToCart" className="btn">Add to Cart</button>
            <p className="stock">The actually stock is ({stock})</p>
            </div>
            <button  className="btn-buy-2">${price}</button>
    </div>

    )

}

export default ItemCount

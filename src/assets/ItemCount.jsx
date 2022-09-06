import React, { useState } from "react";

const ItemCount = ({initial, stock}) => {
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
            <button id="addToCart" className="btn">Add to Cart</button>
            <p className="stock">({stock})</p>
            </div>
    </div>

    )

}

export default ItemCount

import React from "react";

const ItemDetail = ({data}) => {
console.log(data)
    return(
<div>
    <div className="item-detail">
        <h3>{data.title}</h3>
        <img src={data.image} alt="" />
        <p>{data.description}</p>
    </div>
</div>
    )
    }

    export default ItemDetail
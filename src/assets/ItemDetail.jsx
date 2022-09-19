import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({data}) => {
console.log(data)
    return(
<div>
    <div className="item-detail">
        <h3 className="title-detail">{data.title}</h3>
        <div className="card-detail">
        <img className="img-detail" src={data.image} alt="" />
        <div className="description">
        <ItemCount price={data.price} initial={1} stock={5}/>
        <p className="par-detail"> {data.description}</p>
        </div>
        </div>

    </div>
</div>
    )
    }

    export default ItemDetail
import React from "react";
import Item from "./Item";
const ItemList = ({items}) => {
    return (
        <div className="row">
{items.map(item => (

<Item id={item.id} nombre={item.title} imagen={item.image} precio={item.price}/>

))}     </div>
    )
}

export default ItemList;
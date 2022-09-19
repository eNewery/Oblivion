import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
    const [items, setItems] = useState({});
useEffect(() =>{
    fetch('https://fakestoreapi.com/products/1').then((res) => res.json()).then((data) =>{
    setItems(data)
})
}, {});

return(
<ItemDetail data = {items}/>
    )
}

export default ItemDetailContainer
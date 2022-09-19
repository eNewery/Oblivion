import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
const {id} = useParams()

    const [items, setItems] = useState({});
useEffect(() =>{
    fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json()).then((data) =>{
    setItems(data)
})
}, {});


return(
<ItemDetail data = {items}/>
    )
}

export default ItemDetailContainer
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
useEffect(() =>{
    fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((data) =>{
    setItems(data)
})
}, []);

    return (
        <div className="container">
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import {collection, getDocs, getFirestore } from "firebase/firestore"
import { Link } from "react-router-dom";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Items")
        getDocs(itemsCollection).then((snapshot) => {
     setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})));
        })
    }, [])


    return (
        <div className="container">
            <div className="cathegory"><Link items={items} to={"/Cathegory/Jewelry"}>Jewelry</Link>
            <Link items={items} to={"/Cathegory/Electronics"}>Electronics</Link>
        <Link items={items} to={"/Cathegory/Mens-Clothing"}>Men's Clothing</Link>
        <Link items={items} to={"/Cathegory/Womens-Clothing"}>Women's Clothing</Link></div>

            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;
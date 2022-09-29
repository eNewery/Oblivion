import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import {collection, getDocs, doc, getDoc, getFirestore } from "firebase/firestore"




const ItemListContainer = () => {
    useEffect(() => {
        const db = getFirestore();
        const response = doc(db, "Items", "0m5x9YdzMQj4U7n5wwgp");
        getDoc(response).then((snapshot) => {
            console.log(snapshot.data())
        })
    }, [])



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
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;
import React from "react";
import { useState, useEffect } from "react";
import {collection, getDocs, getFirestore } from "firebase/firestore"
import Purchase from "./Purchase";
const Purchases = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Orders")
        getDocs(itemsCollection).then((snapshot) => {
     setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})));
        })
    }, [])
let Products = []
    items.map(item => Products.push(item.items) );
    
    if (Products.length === 0) {
        return(
           <div className="no-products">
            <h1 className="no-products-title">No recent purchases!</h1>
           </div>
        )
    }
return(
    <div className="purchases-container">
        <h1 className="title-purchase">Purchases log</h1>
        <div>
        {Products.map(prod => prod.map(pro => (
         <Purchase className="purchase-container-card" image={pro.image} title={pro.title} price={pro.price} id={pro.id}/>   
        )))}
        
        </div>
    </div>
)
}

export default Purchases;
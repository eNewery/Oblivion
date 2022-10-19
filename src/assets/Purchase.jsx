import React from "react";
import { useState, useEffect } from "react";
import {collection, getDocs, getFirestore } from "firebase/firestore"

const Purchase = ({title, price, id, image}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Orders")
        getDocs(itemsCollection).then((snapshot) => {
     setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})));
        })
    }, [])


    return(
    
        <div className="purchase-container">
            <div className="purchase-title">            
            <h2>{title}</h2>
            <a target="_blank" href={image}>See image in Fullscreen</a>
            <h4>Purchase ID: {id}</h4>
            </div>
            <div>
        </div>
            <div className="purchase-price">
                <p>{price}$</p>
            </div>
        </div>
    )
}

export default Purchase;
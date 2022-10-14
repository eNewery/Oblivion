import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {collection, getDocs, getFirestore } from "firebase/firestore"
import Item from "./Item";
import back from "../img/back.png"
import { Link } from "react-router-dom";
const Jewelry = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "Items")
        getDocs(itemsCollection).then((snapshot) => {
     setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})));
        })
    }, [])

    const results = items.filter(item => item.category === "jewelry")
    return (
        <div className="row">
            
 <div className="back-cath">

        <Link to={"/Shop"}>
                     <img width={24} src={back} alt="" /> <p>Back</p>
                    </Link>
                    <h1>Jewelry</h1>
                    </div>

        {results.map(item => (
        <Item id={item.id} nombre={item.title} imagen={item.image} precio={item.price}/>))}     </div>  
    )
}

export default Jewelry;
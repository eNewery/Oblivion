import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail"
import {doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {
const {id} = useParams()

    const [items, setItems] = useState({});
    useEffect(() => {
        const db = getFirestore();
        const response = doc(db, "Items", id);
        getDoc(response).then((snapShot) => {
            setItems({id:snapShot.id, ...snapShot.data()});
        });
    }, [id]);


return(
<ItemDetail data = {items}/>
    )
}

export default ItemDetailContainer
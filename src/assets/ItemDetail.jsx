import React from "react";

import ItemCount from "./ItemCount";
import {useCartContext} from "../CartContext"
import back from "../img/back.png"
import { Link } from "react-router-dom";

const ItemDetail = ({data}) => {
const [goToCart, setGoToCart] = React.useState(false)
const {addItem} = useCartContext()


const onAdd = (quantity) => {
    setGoToCart(true);
    addItem(data, quantity);
}


    return(
<div>
    <div className="item-detail">
        <div className="title-back">
<Link to={"/Shop"}>
            <img width={12} src={back} alt="" />
            </Link>
        <h3 className="title-detail">{data.title}</h3>
        </div>
        <div className="card-detail">
            <div className="card-img">
        <img className="img-detail" src={data.image} alt="" />
        <h3 className="cath-detail">Cath: {data.category}</h3>
        </div>
        <div className="description">
         {
         goToCart   
        ? <Link  className="btn-finishbuy" to="/Cart">Ir al carrito</Link> 
        :<ItemCount onAdd={onAdd} price={data.price} initial={1} stock={data.stock}/>
    }
        <p className="par-detail"> {data.description}</p>
        </div>
        </div>

    </div>
</div>
    )
    }

    export default ItemDetail
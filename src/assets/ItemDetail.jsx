import React from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import back from "../img/back.png"
import { Link } from "react-router-dom";

const ItemDetail = ({data}) => {

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
        <ItemCount price={data.price} initial={1} stock={data.id}/>
        <p className="par-detail"> {data.description}</p>
        </div>
        </div>

    </div>
</div>
    )
    }

    export default ItemDetail
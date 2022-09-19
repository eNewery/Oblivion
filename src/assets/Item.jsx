import React from "react";
import { NavLink } from "react-router-dom";
const Item = ({id, nombre, imagen, precio}) => {


    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title text-center"><p className="card-para">{nombre}</p></h5>
                <img width={148} src={imagen} alt="" />
                <NavLink to={`/Shop/${id}`}>
                <button className="btn-buy">${precio}</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Item;
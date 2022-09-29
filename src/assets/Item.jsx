import React from "react";
import { NavLink } from "react-router-dom";
const Item = ({id, nombre, imagen, precio}) => {


    return (

        <div className="card">
            <div className="card-body">
        
                
                <h5 className="card-title text-center"><p className="card-para">{nombre}</p></h5>
                <NavLink to={`/Shop/${id}`}>
                <img width={148} src={imagen} alt="" />
                </NavLink>
                <button className="btn-buy">${precio}</button>
                
            </div>
        </div>
     
    )
}

export default Item;
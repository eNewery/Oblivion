import React from "react";
import { NavLink } from "react-router-dom";
const Item = ({id, nombre, imagen, precio}) => {


    return (
        <NavLink to={`/Shop/${id}`}>
        <div className="card">
            <div className="card-body">
        
                <h5 className="card-title text-center"><p className="card-para">{nombre}</p></h5>
                <img width={148} src={imagen} alt="" />
  
                <button className="btn-buy">${precio}</button>
                
            </div>
        </div>
        </NavLink>
    )
}

export default Item;
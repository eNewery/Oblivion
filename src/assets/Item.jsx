import React from "react";

const Item = ({nombre, imagen, precio}) => {
    console.log(nombre)
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title text-center"><p className="card-para">{nombre}</p></h5>
                <img width={148} src={imagen} alt="" />
                <button className="btn-buy">${precio}</button>
            </div>
        </div>
    )
}

export default Item;
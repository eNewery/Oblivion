import React from "react";
import ItemCount from "./ItemCount";
import Item from "./Item";
import Product1 from "../img/1.png"
import Product2 from "../img/2.png"
import Product3 from "../img/3.png"
import Product4 from "../img/4.png"
const ItemList = () => {
return(
    <div className="item-count-list">
        <div className="card">
            <Item titulo={"Labrador"} imagen={Product1}/>
    <ItemCount initial={1} stock={2}/>
    </div>
    <div className="card">
            <Item titulo={"Chihuahua"} imagen={Product2}/>
    <ItemCount initial={1} stock={9}/>
    </div>
    <div className="card">
            <Item titulo={"Pedigree"} imagen={Product3}/>
    <ItemCount initial={1} stock={5}/>
        </div>
    <div className="card">
            <Item titulo={"BullTerrier"} imagen={Product4}/>
    <ItemCount initial={1} stock={8}/>
        </div>
    </div>
)
}

export default ItemList
import React from "react";

const ItemListContainer = (props) => {
   const {
    productos,
   } = props
   
   return(
<div className="item-list-container">

    {

productos.map((elem)=>{
   return <li>{elem}</li>
})

    }
    
</div>
    )
}

export default ItemListContainer
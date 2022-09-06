import React from "react";

const Item = ({titulo, imagen}) => {
return(
    <div className="item-card">
<h6>{titulo}</h6>
<img width="64px" src={imagen} alt="" />
</div>
)
}

export default Item
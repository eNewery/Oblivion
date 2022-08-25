import React from "react";
import logo from "../img/farm.png"
import "../App.css"

let NavBar = () => {
return(
<div className="header">
    <div className="header-logo"><h1 className="header-title">Fuel | Blockchain</h1> <img id="logo" width="50px" src={logo} alt="" /></div>
    <nav className="navbar"><ul><li><a href="#">Shop</a></li>
    <li><a href="#">Coins</a></li></ul></nav>
</div>
)
}

export default NavBar
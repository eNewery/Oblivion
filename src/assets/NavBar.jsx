import React from "react";

import "../App.css"
import CartWidget from "./CartWidget";
import Logo from "./Logo";

let NavBar = () => {
return(
<div className="header">
    <div className="header-logo"><a href="Home"><h1 className="header-title">Fuel | Blockchain</h1></a><Logo/> </div>
    <nav className="navbar"><ul><li><a className="nav-link" href="Shop">Shop</a></li>
    <li><a className="nav-link" href="#">Coins</a></li></ul> <CartWidget/></nav>
</div>
)
}

export default NavBar
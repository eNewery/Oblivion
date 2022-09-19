import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css"
import CartWidget from "./CartWidget";
import Logo from "./Logo";

let NavBar = () => {
return(
<div className="header">
    <div className="header-logo"><NavLink to="/"><h1 className="header-title">Oblivion | Store</h1></NavLink><Logo/> </div>
    <nav className="navbar"><ul>
    <li><NavLink className="nav-link" to="/Contact">Contact</NavLink></li>
        <li><NavLink className="nav-link" to="/Shop">Shop</NavLink></li>
  </ul> <CartWidget/></nav>
</div>
)
}

export default NavBar
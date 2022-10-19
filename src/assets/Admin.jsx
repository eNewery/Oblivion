import React from "react";
import { Link } from "react-router-dom";
const Admin = () => {

    return(
        <div className="admin-panel-container">
            <div className="admin-panel-title"><h1>Welcome to the Admin Panel</h1></div>
            <div className="admin-panel-options"><Link to={"/Admin/Purchases"}>Purchases log</Link></div>
        </div>
    )
}

export default Admin;
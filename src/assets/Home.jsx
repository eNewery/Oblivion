import React from "react";
import { Link } from "react-router-dom";
const Home = () =>{
    return (
        <div className="home">
<div className="home-start">
            <h1 className="home-title">
Welcome to Oblivion Store
</h1>
<button className="home-btn">Know more</button>
</div>

       <Link className="btn-1" to={"/Admin"}>Go To AdminPanel</Link>
        </div>

    )
}

export default Home
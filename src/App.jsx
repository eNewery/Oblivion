import React from 'react';
import './App.css';
import NavBar from './assets/NavBar';
import Shop from './assets/Shop';
import  { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './assets/Home';
import ItemDetailContainer from './assets/ItemDetailContainer';

function App() {
  return (
        <BrowserRouter>
        <NavBar/>
        <ItemDetailContainer/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Shop" element={<Shop/>}/>
        <Route exact path="/Cart"/>
        <Route exact path="/Cathegory"/>
        <Route exact path="/Detail"/>
        </Routes>
        </BrowserRouter>
    );
    }

export default App;

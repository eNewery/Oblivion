import React from 'react';
import './App.css';
import NavBar from './assets/NavBar';
import Shop from './assets/Shop';
import  { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './assets/Home';

function App() {
  return (
        <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Shop" element={<Shop/>}/>
        </Routes>
        </BrowserRouter>
    );
    }

export default App;

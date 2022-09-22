import React from 'react';
import './App.css';
import NavBar from './assets/NavBar';
import Shop from './assets/Shop';
import  { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './assets/Home';
import CartProvider from './CartContext';
import ItemDetailContainer from './assets/ItemDetailContainer';
import Contact from './assets/Contact';



function App() {
  return (
        <BrowserRouter>
        <CartProvider>
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Shop/:id" element={<ItemDetailContainer/>}/>
        <Route exact path="/Shop" element={<Shop/>}/>
        <Route exact path='/Contact' element={<Contact/>}/>
        <Route exact path="/Cart"/>
        <Route exact path="/Cathegory"/>
        <Route exact path="/Detail"/>
        </Routes>
        </CartProvider>
        </BrowserRouter>
    );
    }

export default App;

import React from 'react';
import './App.css';
import NavBar from './assets/NavBar';
import Shop from './assets/Shop';
import  { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './assets/Home';
import CartProvider from './CartContext';
import ItemDetailContainer from './assets/ItemDetailContainer';
import Contact from './assets/Contact';
import Cart from './assets/Cart';
import Jewelry from './assets/Jewelry';
import Mens from './assets/Mens';
import Womens from './assets/Womens';
import Electronics from './assets/Electronics';


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
        <Route exact path="/Cart" element={<Cart/>}/>
        <Route exact path="/Cathegory/Jewelry" element={<Jewelry/>}/>
        <Route exact path="/Cathegory/Mens-Clothing" element={<Mens/>}/>
        <Route exact path="/Cathegory/Womens-Clothing" element={<Womens/>}/>
        <Route exact path="/Cathegory/Electronics" element={<Electronics/>}/>
        <Route exact path="/Detail"/>
        </Routes>
        </CartProvider>
        </BrowserRouter>
    );
    }

export default App;

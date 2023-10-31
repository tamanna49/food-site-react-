import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import ContactUs from './pages/contactus/ContactUs';
import Story from './pages/ourstory/Story';
import Login from './pages/login/Login';
import Dealss from './components/Deals/Dealss.js';
import Facts from './components/api/Facts';
import Discount from './components/Deals/Discount';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/facts' element={<Facts/>} />
      <Route path='/discount' element={<Discount/> }/>
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App

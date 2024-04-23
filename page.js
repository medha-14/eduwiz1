"use client"
import About from '@/pages/About'
import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import Wda from '@/pages/Wda';
import { BrowserRouter,Routes,Route } from 'react-router-dom';




const page = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/' element={<Wda/>}></Route>
    <Route path='/about' element={<About/>}></Route>
   </Routes>
 
   </BrowserRouter>
  )
}

export default page

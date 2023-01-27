import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from '../About';
import AddBlog from '../AddBlog';
import Home from '../Home';
import Navbar from './Navbar';
import Protected from './Protected';

const ReactRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn?"Log Out":"Log In"}</button>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addblog" element={<Protected isLoggedIn={isLoggedIn}><AddBlog/></Protected>} /> 
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default ReactRoute;

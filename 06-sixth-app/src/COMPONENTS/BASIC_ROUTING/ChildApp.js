import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './Navbar.css';
import Blog from './Blog';
import Contact from './Contact';
import Error from './Error';
import Home from './Home';
import Navbar from './Navbar';

const ChildApp = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<Error />}/>
        </Routes>
    </BrowserRouter>
  )
};

export default ChildApp;

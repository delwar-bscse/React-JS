import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './Navbar.css';
import Blogs from './Blogs';
import Blog from './Blog';
import Contact from './Contact';
import Error from './Error';
import Home from './Home';
import Navbar from './Navbar';
import User1 from './User1';
import User2 from './User2';

const ChildApp = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/blogs" element={<Blogs />}/>
            <Route path="/blogs/:title" element={<Blog />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<Error />}/>
            <Route path="/user1/:name/:age" element={<User1/>} />
            <Route path="/user2" element={<User2/>} />
        </Routes>
    </BrowserRouter>
  )
};

export default ChildApp;

import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blogs">Blog</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
};

export default Navbar;

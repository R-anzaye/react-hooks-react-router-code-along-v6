import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav id="navbar">
      <NavLink to="/" >
        Home
      </NavLink>
      <NavLink to="/about" >
        About
      </NavLink>
      <NavLink to="/login">
        Login
      </NavLink>
    </nav>
  );
};

export default NavBar;

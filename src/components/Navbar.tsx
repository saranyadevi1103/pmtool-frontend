import React from 'react';
import { NavLink } from 'react-router-dom';
// src/components/Navbar.tsx
import "../styles/Navbar.css"; // Assuming Navbar.css lives in /src/styles

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">ProjectFlow</h2>
      <ul className="nav-links">
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/tasks">Tasks</NavLink></li>
        <li><NavLink to="/team">Team</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/signup">Signup</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
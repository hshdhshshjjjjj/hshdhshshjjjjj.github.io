import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Ash's Developer Portfolio</div>
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "neon-link active" : "neon-link"} end>Home</NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? "neon-link active" : "neon-link"}>Profile</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "neon-link active" : "neon-link"}>Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar; 
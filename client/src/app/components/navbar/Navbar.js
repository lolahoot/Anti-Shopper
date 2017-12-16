import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar">Log In</Link>
      <Link to="/profile" className="navbar">Profile</Link>
      <Link to ="/shopping-list" className="navbar">Shopping List</Link>
    </nav>
  )
}

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">My Portfolio</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </div>
    </nav>
  );
}

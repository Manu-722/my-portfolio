import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo" onClick={() => setPage('home')}>My Portfolio</a>
        <ul className="nav-links">
          <li><a href="#" onClick={() => setPage('home')}>Home</a></li>
          <li><a href="#" onClick={() => setPage('about')}>About Me</a></li>
          <li><a href="#" onClick={() => setPage('contacts')}>Contacts</a></li>
        </ul>
      </div>
    </nav>
  );
}

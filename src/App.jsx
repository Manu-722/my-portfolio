import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";  // Navbar in Components
import Home from "./Components/Home";      // Now from Components folder
import About from "./Components/About";    // Now from Components folder
import Contacts from "./Components/Contacts"; // Now from Components folder
import "./App.css"; // Uses App.css for styling

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
}

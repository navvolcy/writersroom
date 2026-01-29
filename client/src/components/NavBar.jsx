import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import Home from "../pages/Home";
import About from "../pages/About";
import Episodes from "../pages/Episodes";
import Login from "../pages/Login";
import Register from "../pages/Register";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4">
        <ul className="hidden md:flex gap-x-10">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/episodes">Episodes</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        {/* Hamburger */}
        <div onClick={() => setNav(!nav)} className="md:hidden z-10">
          {nav ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="md:hidden absolute top-[80px] left-0 w-full bg-white">
          <li><Link to="/home" onClick={() => setNav(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setNav(false)}>About</Link></li>
          <li><Link to="/episodes" onClick={() => setNav(false)}>Episodes</Link></li>
          <li><Link to="/login" onClick={() => setNav(false)}>Login</Link></li>
        </ul>
      )}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default NavBar;

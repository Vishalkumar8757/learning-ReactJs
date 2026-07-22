import { useState } from "react";
import { Link } from "react-router-dom";

import "../mycss/Nav.css";
import logo from "../assets/OIP.jpg";

function Nav(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  let x = props.data;
  let y = props.data1;
  console.log(x,y); 
 
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo-img" />
        <h2>MyWebsite</h2>
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/service">Services</Link>
        </li>

        <li>
          <Link to="/register">User_registation</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Nav;
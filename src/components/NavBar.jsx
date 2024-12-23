import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="france">Explore France</div>
      
      {/* Hamburger Icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Menu Links */}
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/destinations">Destinations</Link>
        <Link className="link" to="/packages">Packages</Link>
        <Link className="link" to="/gallery">Gallery</Link>
        <Link className="link" to="/booknowform">BookNow</Link>
      </div>
    </nav>
  );
}

export default NavBar;

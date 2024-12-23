import React from "react";
import { FaSquarePhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h1 className="footer-title">Contact Us</h1>
      <div className="footer-contact">
        <h3><FaSquarePhone className="icon" /> 9876543211</h3>
        <h3><MdOutlineEmail className="icon" /> travelling@rit.com</h3>
        <h3><FaInstagram className="icon" /> @TravellingRit</h3>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Travel Company</p>
      </div>
    </footer>
  );
}

export default Footer;

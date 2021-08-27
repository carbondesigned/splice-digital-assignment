import React from "react";

import { StyledFooter } from "./Footer.styles";

// Logos
import logo from "../../assets/logos/teradyne-logo-s.png";
import tugxLogo from "../../assets/logos/tugx-c.png";
import careers from "../../assets/logos/twitter-careers.svg";

import {
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="logo">
        <img src={logo} alt="teradyne logo" />
      </div>
      <div className="main">
        <ul className="links">
          <div className="col">
            <li className="link">About Us</li>
            <li className="link">Management</li>
            <li className="link">Locations</li>
            <li className="link">Corporate Social Responsibility</li>
          </div>
          <div className="col">
            <li className="link">Investor Relations</li>
            <li className="link">Careers</li>
            <li className="link">Events & Conferences</li>
            <li className="link">Press Room</li>
          </div>
        </ul>
        <div className="socials">
          <form className="newsletter">
            <label htmlFor="input">Subscribe to our newsletter</label>
            <input type="text" name="input" />
          </form>
          <div className="social-links">
            <img src={tugxLogo} alt="logo" />
            <FaTwitter className="logo" />
            <FaLinkedinIn className="logo" />
            <FaYoutube className="logo" />
            <FaFacebookF className="logo" />
            <img src={careers} alt="careers" />
          </div>
        </div>
      </div>
      <div className="copy">
        <span>&copy; Teradyne Inc. 1994-2021. All rights reserved</span>
        <ul className="copy-links">
          <li>Site Map</li>
          <li>Terms of Use</li>
          <li>Privacy Statement</li>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;

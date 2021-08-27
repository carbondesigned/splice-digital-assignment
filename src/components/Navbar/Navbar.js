import React, { useState } from "react";
import Subnav from "../Subnav/Subnav";

import { StyledNavbar } from "./Navbar.styles";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
  };
  return (
    <StyledNavbar>
      <div className="logo">Teradyne</div>
      <div className="hamburger">
        <div className="line1 line"></div>
        <div className="line2 line"></div>
        <div className="line3 line"></div>
      </div>
      <ul className="links">
        <li onClick={clickHandler} className="link">
          Products
        </li>
        <li onClick={clickHandler} className="link">
          Industries
        </li>
        <li onClick={clickHandler} className="link">
          Applications
        </li>
        <li onClick={clickHandler} className="link">
          Services
        </li>
        <li onClick={clickHandler} className="link">
          Support
        </li>
        <li onClick={clickHandler} className="link">
          Company
        </li>
      </ul>
      <Subnav active={active} />
    </StyledNavbar>
  );
};

export default Navbar;

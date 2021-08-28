import React, { useState } from "react";
import Subnav from "../Subnav/Subnav";

import Sidebar from "../Sidebar";

import { StyledNavbar, StyledHamburger } from "./Navbar.styles";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const clickHandler = () => {
    setActive(!active);
  };

  const openSidebarToggle = () => {
    setOpenSidebar(!openSidebar);
  };
  console.log(openSidebar);

  return (
    <StyledNavbar>
      <div className="logo">Teradyne</div>
      <StyledHamburger
        className="hamburger"
        onClick={openSidebarToggle}
        openSidebar={openSidebar}
      >
        <div className="line1 line"></div>
        <div className="line line2"></div>
        <div className="line3 line"></div>
      </StyledHamburger>
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
      {openSidebar && <Sidebar />}
    </StyledNavbar>
  );
};

export default Navbar;

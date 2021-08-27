import React from "react";

// icons
import { FaGlobeAmericas, FaSearch } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { BsFillGearFill } from "react-icons/bs";

// Styling
import { StyledUtilBar } from "./Utilbar.styles";

const UtilBar = () => {
  return (
    <StyledUtilBar>
      <ul className="links">
        <li className="link">
          <BsFillGearFill className="icon" />
          eKnowledge
        </li>
        <li className="link">
          <FaGlobeAmericas className="icon" />
          English <BiChevronDown />
        </li>
        <li className="link">
          <FaSearch className="icon" />
          Search
        </li>
      </ul>
    </StyledUtilBar>
  );
};

export default UtilBar;

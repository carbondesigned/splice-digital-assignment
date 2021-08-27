import React from "react";

import { StyledSection } from "./StatsSection.styles";

import bg from "../../../assets/img/bottom-section.png";

import Button from "../../../components/Button";

import { BsArrowUpRight } from "react-icons/bs";

const StatsSection = () => {
  return (
    <StyledSection bg={bg}>
      <div className="heading">
        <div className="title">Invest in Innovation</div>
        <div className="sub">
          Innovation is at the core what we do. We're backed by the global team
          of proven experts, dedicated to ensuring that the technologies that
          power our lives work the way they were intended.
        </div>
        <Button white>Contact Us</Button>
      </div>
      <div className="stats">
        <div className="stat">
          <h2 className="main">687</h2>
          <h4 className="sub">Patents</h4>
        </div>
        <div className="stat">
          <h2 className="main">
            $2.1<span className="b">B</span>
          </h2>
          <h4 className="sub">Annual Revenue</h4>
        </div>
        <div className="stat">
          <h2 className="main">52.76</h2>
          <h4 className="sub">
            NASDAQ:TER ‎‎‏‏‎ ‎‏‏‎ ‎ +0.105 <BsArrowUpRight />
          </h4>
          <span className="extra">
            <span className="data">09.30.19 | 10:AM EST</span>
          </span>
        </div>
      </div>
    </StyledSection>
  );
};

export default StatsSection;

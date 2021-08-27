import React, { useState } from "react";

// Images
import heroBg from "../../../assets/img/hero-pic.png";

// Styles
import { StyledHero } from "./HeroSection.styles";

// Components
import Button from "../../../components/Button";
import AdditionalMenu from "../../../components/AdditionalMenu";

// Icons
import { GoTriangleDown } from "react-icons/go";

const HeroSection = () => {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
  };

  const hoverHandler = () => {};
  return (
    <StyledHero heroBg={heroBg}>
      <div className="top-hero">
        <div className="headline">
          <h1 className="title">
            Creating the next generation of technology through advanced test
            solutions and collaborative robotics
          </h1>
          <Button>Learn More About Teradyne</Button>
        </div>
      </div>
      <div className="bottom-hero">
        <div className="companies">
          <div className="title-wrapper">
            <h4 className="title">Teradyne Companies</h4>
          </div>
          <div className="content">
            <div className="wrapper">
              <div className="desc-title">
                Teradyne companies provide Lorem, ipsum...
              </div>
              <div className="desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                accusamus velit nihil iure corrupti veniam mollitia optio
                accusantium hic est. Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet.
              </div>
            </div>
            <div className="cta view" onClick={clickHandler}>
              View Teradyne Companies <GoTriangleDown />
            </div>
          </div>
          <AdditionalMenu active={active} setActive={setActive} />
        </div>
      </div>
    </StyledHero>
  );
};

export default HeroSection;

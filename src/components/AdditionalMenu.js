import React, { useState } from "react";
import styled from "styled-components";

// Logos
import logo1 from "../assets/logos/logo-1.png";
import logo2 from "../assets/logos/logo-2.png";
import logo3 from "../assets/logos/logo-3.png";
import logo4 from "../assets/logos/logo-4.png";
import logo5 from "../assets/logos/logo-5.png";
import logo6 from "../assets/logos/logo-6.png";
import logo7 from "../assets/logos/logo-7.png";

const AdditionalMenu = ({ active, setActive }) => {
  return (
    <StyledContainer active={active}>
      <div className="desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
        delectus voluptas mollitia ea laudantium esse ullam, molestiae quasi
        corrupti. Lorem, ipsum. Click to visit.
      </div>
      <div className="logos">
        <img src={logo1} alt="logo" />
        <img src={logo2} alt="logo" />
        <img src={logo3} alt="logo" />
        <img src={logo4} alt="logo" />
        <img src={logo5} alt="logo" />
        <img src={logo6} alt="logo" />
        <img src={logo7} alt="logo" />
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background: ${(p) => p.theme.colors.secGradient};
  color: #fff;
  padding: 2em;
  width: 100%;
  display: ${(p) => (p.active ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translate(50%, 100%);

  .desc {
    font-size: ${(p) => p.theme.fonts.smParagraph};
    text-align: center;
    padding-bottom: 2em;
    position: relative;

    &::after {
      content: "";
      width: 15%;
      height: 0.15em;
      background-color: ${(p) => p.theme.colors.primary};
      position: absolute;
      bottom: 0;
      right: 50%;
      transform: translateX(50%);
    }
  }

  .logos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1em;
    padding-bottom: 2em;

    img {
      height: 100%;
      max-width: 25%;
    }
  }

  @media only screen and (min-width: 1400px) {
    padding: 5em 15em;

    .desc {
      padding: 0 5em 2em 5em;
    }

    .logos {
      gap: 5em;
      padding: 5em 0;
    }
  }
`;

export default AdditionalMenu;

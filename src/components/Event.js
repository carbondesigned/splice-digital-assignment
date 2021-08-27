import React from "react";
import styled from "styled-components";

// Bullet List
import bullet from "../assets/img/list-bullet.png";

const Event = ({ type }) => {
  return (
    <StyledEvent className="event" bullet={bullet}>
      <h3 className="type">{type}</h3>
      <span className="content">
        <h4 className="title">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
          iste? Lorem ipsum dolor sit amet.
        </h4>
        <p className="snip">
          August 28, 2019 Lorem ipsum dolor sit amet.
          <div className="cta">Read More</div>
        </p>
      </span>
    </StyledEvent>
  );
};

const StyledEvent = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${(p) => p.theme.colors.darkAlt};

  .type {
    position: relative;
    font-size: ${(p) => p.theme.fonts.xlgParagraph};
    font-weight: 700;

    &::after {
      content: "";
      background-image: url(${(p) => p.bullet});
      position: absolute;
      left: -1em;
      bottom: 50%;
      transform: translateY(50%);
      height: 10px;
      width: 10px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }

  .content {
    line-height: 1.5;
    padding: 0 5em;
    .title {
      font-size: ${(p) => p.theme.fonts.xlgParagraph};
    }
  }

  .snip {
    display: flex;
    gap: 1em;
    align-items: center;
    font-size: clamp(1.245em, 3vw, 1.925em);

    .cta {
      text-decoration: underline;
      text-decoration-color: ${(p) => p.theme.colors.primary};
      cursor: pointer;
      font-size: 1.145em;
      line-height: 1.5;
      white-space: nowrap;
    }
  }

  @media only screen and (min-width: 1400px) {
    flex-direction: row;
    margin-right: 2em;

    .type {
      flex: 25%;
      &::after {
        top: 0;
      }
    }

    .content {
      flex: 100%;
    }
  }
`;

export default Event;

import React from "react";

import { StyledCard } from "./JoinCard.styles";

import img from "../../../assets/img/happy-metting.png";

import Button from "../../../components/Button";

const JoinCard = () => {
  return (
    <StyledCard>
      <div className="card">
        <img src={img} alt="meeting" />
        <div className="info">
          <h2 className="title">Join the Teradyne team</h2>
          <p className="desc">
            We make technology work everywhere. Allowing you to work from
            anywhere. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis sunt culpa architecto suscipit quia? Natus!
          </p>
          <div className="ctas">
            <Button secondary>Why work at Teradyne</Button>
            <Button secondary>View all current openings</Button>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default JoinCard;

import React from "react";

// Components
import Event from "../../../components/Event";
import Button from "../../../components/Button";

// img
import logo from "../../../assets/logos/TUGx-w.png";

// Styles
import { StyledSection } from "./NewsEventsSection.styles";

const NewsEventsSection = () => {
  return (
    <StyledSection>
      <div className="header">
        <h2 className="title">News & Events</h2>
      </div>

      <div className="main">
        <div className="list">
          <ul className="news">
            <Event type="In the News" />
            <Event type="Press Release" />
            <Event type="Event" />
          </ul>
          <Button>View All in Newsroom</Button>
        </div>
        <div className="events">
          <img src={logo} alt="logo" className="logo" />
          <div className="desc">
            <h4 className="title">Teradyne Users Group</h4>
            <p className="body">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              cupiditate quo obcaecati voluptatum libero fugit tempore et, qui
              quod velit!
            </p>
          </div>
          <ul className="upcoming">
            <h4 className="title">Upcoming Events</h4>
            <li className="occasion">San Jose, CA - 10 Sept 2019</li>
            <li className="occasion">Irvine, CA - 17 Sept 2019</li>
            <li className="occasion">United Kingdom - 17 Sept 2019</li>
            <li className="occasion">San Diego, CA - 18 Sept 2019</li>
          </ul>
          <Button>View All TUGX Events</Button>
        </div>
      </div>
    </StyledSection>
  );
};

export default NewsEventsSection;

import React from "react";

// Styling
import { StyledSection } from "./ApplicationsSection.styles";

// Illustrations
import illu1 from "../../../assets/img/illustrations1.png";
import illu2 from "../../../assets/img/illustrations2.png";
import illu3 from "../../../assets/img/illustrations3.png";
import illu4 from "../../../assets/img/illustrations4.png";
import illu5 from "../../../assets/img/illustrations5.png";
import illu6 from "../../../assets/img/illustrations6.png";
import illu7 from "../../../assets/img/illustrations7.png";

const ApplicationsSection = () => {
  return (
    <StyledSection>
      <div className="header">
        <h2 className="title">Find us by application</h2>
        <h4 className="sub-title">
          From life-saving healthcare and automotive safety to the consumer tech
          we use every day - the world relies on Teradyne to make sure critical
          electronics work, every singe time.
        </h4>
      </div>
      <div className="applications">
        <div className="application">
          <img src={illu1} alt="illustration" />
          <div className="title">
            <h4>Industrial Automation</h4>
          </div>
        </div>
        <div className="application">
          <img src={illu2} alt="illustration" />
          <div className="title">
            <h4>Semiconductor Testing</h4>
          </div>
        </div>
        <div className="application">
          <img src={illu3} alt="illustration" />
          <div className="title">
            <h4>Wireless Testing</h4>
          </div>
        </div>
        <div className="application">
          <img src={illu4} alt="illustration" />
          <div className="title">
            <h4>Storage Testing</h4>
          </div>
        </div>
        <div className="application">
          <img src={illu5} alt="illustration" />
          <div className="title">
            <h4>Printed Circuit Board Testing</h4>
          </div>
        </div>
        <div className="application">
          <img src={illu6} alt="illustration" />
          <div className="title">
            <h4>System Level Testing</h4>
          </div>
        </div>
        <div className="application">
          <img src={illu7} alt="illustration" />
          <div className="title">
            <h4>Defence & Aerospace</h4>
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default ApplicationsSection;

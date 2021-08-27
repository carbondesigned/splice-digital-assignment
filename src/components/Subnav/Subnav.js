// Components
import Button from "../Button";

// Styles
import { StyledSubnav } from "./Subnav.styles";

// Img
import subnavImg from "../../assets/img/subnav-img.png";

const Subnav = ({ active }) => {
  return (
    <StyledSubnav active={active}>
      <div className="main">
        <h2 className="title">Products</h2>
        <ul className="categories">
          <li>Industrial Automation</li>
          <li>Digital / Mixed Signal Testing</li>
          <li>Linear, Power & Automotive Testing</li>
          <li>Micro-Controller / Image Sensor Testing</li>
          <li>Memory Testing</li>
          <li className="active">Printed Circuit Board Testing</li>
          <li>Storage System / Level Testing</li>
          <li>Wireless Testing</li>
          <li>Defence & Aerospace</li>
        </ul>
      </div>
      <ul className="sub-links">
        <li>
          <h4 className="title">Testing Station Handler</h4>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            quos.
          </p>
        </li>
        <li>
          <h4 className="title">Testing Station Handler Large Format</h4>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            quos.
          </p>
        </li>
        <li>
          <h4 className="title">Test Station In-Line</h4>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            quos.
          </p>
        </li>
        <li>
          <h4 className="title">Test Station LH / LS</h4>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            quos.
          </p>
        </li>
        <li>
          <h4 className="title">Test Station LX / LX2</h4>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            quos.
          </p>
        </li>
        <li>
          <h4 className="title">Test Station Asynchronous</h4>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            quos.
          </p>
        </li>
        <li>
          <h4 className="title">Test Station Online</h4>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            quos.
          </p>
        </li>
      </ul>
      <div className="card">
        <div className="header">
          <img src={subnavImg} alt="" />
        </div>
        <div className="content">
          <div className="header">
            <div className="sub">WHITE PAPER</div>
            <div className="title">The Importance of Testing</div>
          </div>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            consequuntur necessitatibus quisquam tenetur nemo cupiditate.
          </p>
          <div>Get the whitepaper</div>
        </div>
      </div>
    </StyledSubnav>
  );
};

export default Subnav;

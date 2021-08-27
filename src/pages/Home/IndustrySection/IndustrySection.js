import React, { useState } from "react";

// Components
import Carousel from "react-bootstrap/Carousel";

// Components
import Button from "../../../components/Button";

// Styles
import { StyledIndustrySection } from "./IndustrySection.styles";

// Icons
import { BsArrowLeft } from "react-icons/bs";

// img
import img1 from "../../../assets/img/industry-img.png";
import img2 from "../../../assets/img/happy-metting.png";
import img3 from "../../../assets/img/img3.png";
import img4 from "../../../assets/img/img4.png";
import img5 from "../../../assets/img/img5.png";

const IndustrySection = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const imgSelector = (id) => {
    if (id === 0) {
      return img1;
    } else if (id === 1) {
      return img2;
    } else if (id === 2) {
      return img3;
    } else if (id === 3) {
      return img4;
    } else if (id === 4) {
      return img5;
    }
  };

  return (
    <StyledIndustrySection>
      <div className="header">
        <h2 className="title">Our Expertise in industry</h2>
        <h3 className="sub-title">
          Teradyne plays an integral role in the following technology industries
          that change the world.
        </h3>
      </div>
      <div className="content">
        <div className="industry-img">
          <img src={imgSelector(index)} alt="" className="img" />
        </div>
        <div className="wrapper">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            prevIcon={
              <span
                aria-hidden="true"
                className="carousel-control-prev-icon"
              ></span>
            }
            nextIcon={
              <span aria-hidden="true" className="carousel-control-next-icon" />
            }
          >
            <Carousel.Item interval={5000} className="item">
              <Carousel.Caption className="slide-title">
                <h3>Industrial Automation</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, dignissimos corrupti! Libero, quasi. Temporibus
                  obcaecati perspiciatis pariatur quis error sit suscipit
                  consequuntur sunt laboriosam quod?
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000} className="item">
              <Carousel.Caption>
                <h3>Industrial Automation</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, dolorem perferendis quo commodi, atque nulla quas
                  iste illum minus consequuntur molestias libero magni magnam
                  deserunt.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000} className="item">
              <Carousel.Caption>
                <h3>Industrial Automation</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatem ullam, corrupti nam quaerat modi aliquam dolore
                  optio reprehenderit animi facere pariatur. Consequatur illo
                  voluptatum iste?
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000} className="item">
              <Carousel.Caption>
                <h3>Industrial Automation</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus aliquam perferendis repellat, molestias quasi quam
                  architecto ex ipsa deleniti, rerum incidunt autem eos natus
                  libero.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000} className="item">
              <Carousel.Caption>
                <h3>Industrial Automation</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur provident sed perspiciatis deserunt blanditiis
                  labore voluptate officia accusantium illum, saepe error
                  dolorum, nihil repudiandae exercitationem.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Button>EXPLORE THE INDUSTRIES WE SERVE</Button>
        </div>
      </div>
    </StyledIndustrySection>
  );
};

export default IndustrySection;

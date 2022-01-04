import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/slickSlider.css";
import data from "./SliderData";
import { BsArrowRight, BsArrowLeft, BsArrowLeftSquare } from "react-icons/bs";

const LeftBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
};

const RightBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <BsArrowRight />
    </div>
  );
};

const SlickSlider = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    prevArrow: <LeftBtn />,
    nextArrow: <RightBtn />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="caro-slider">
      <Slider {...settings}>
        {data.map((image, index) => {
          return (
            <div key={index} className="card">
              <div className="card-image">
                <img src={image.url} alt="" />
              </div>
              <div className="card-details">
                <div className="title"></div>
                <div className="body"></div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlickSlider;

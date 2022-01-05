import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/slickSlider.css";
import slickMainPage from "./slickDataMainPage";
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
        breakpoint: 750,
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
        {slickMainPage.map((data, index) => {
          return (
            <div key={index} className="card">
              <div className="card-image">
                <img src={data.image} alt="" />
              </div>
              <div className="card-details">
                <div className="title">{data.name}</div>
                <div className="body">{data.Price}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlickSlider;

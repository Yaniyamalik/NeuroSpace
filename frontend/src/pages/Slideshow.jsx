import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../public/Home.png"
import image2 from "../public/1.png"
import image3 from "../public/Chat.png";
import "./Slideshow.css"
const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
   image1,image2,image3
  ];

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="flex justify-center">
            <img src={slide} alt={`Slide ${index + 1}`} className="rounded-lg shadow-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;

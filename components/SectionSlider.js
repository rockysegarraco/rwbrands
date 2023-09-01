import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SectionSlider = ({ sliderItems }) => {

  const settings = {
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    arrows: false,
    slidesToScroll: 4,
    easing: "linear",
    pauseOnHover: false,
  };

  return (
    <div className="h-screen bg-slate-900 slide-container">
      <Fade >
        {sliderItems.map((item, index) => (
          <div key={index} className="each-slide-effect each-fade h-screen">
            <div
              className="bg-center"
              style={{
                backgroundImage: item.url,
              }}
            >
              <span className="text-4xl"></span>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default SectionSlider;

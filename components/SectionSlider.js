import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SectionSlider = ({ sliderItems, title = "rw" }) => {
  return (
    <div className="bg-dark slide-container">
      <div className="absolute left-4 top-24 lg:top-24 lg:left-12 z-50 text-white text-4xl lg:text-8xl">
        {title}
      </div>
      <Fade duration={2000} infinite={true} easing="linear">
        {sliderItems.map((item, index) => (
          <div key={index} className="each-fade">
            <div className="bg-center">
              <img className="w-full" src={item.url} alt="" />
              <span className="text-4xl"></span>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default SectionSlider;

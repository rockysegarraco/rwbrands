import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SectionSlider = ({ sliderItems }) => {
  return (
    <div className="bg-dark slide-container">
      <Fade duration={2000} infinite={true} easing="linear">
        {sliderItems.map((item, index) => (
          <div key={index} className="each-fade">
            <div className="bg-center">
              <img src={item.url} alt="" />
              <span className="text-4xl"></span>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default SectionSlider;

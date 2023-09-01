import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SectionSlider = ({ sliderItems }) => {

  return (
    <div className="h-screen bg-slate-900 slide-container">
      <Fade duration={2000} infinite={true} easing="linear" >
        {sliderItems.map((item, index) => (
          <div key={index} className="each-fade h-screen">
            <div
              className="bg-center"
            >
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

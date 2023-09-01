import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SectionSlider = (props) => {
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
    <div className="h-screen bg-slate-900">
      <Fade>
        <div className="each-slide-effect h-screen">
          <div
            className="bg-center"
            style={{
              backgroundImage: "{props.PictureOne}",
            }}
          >
            <span className="text-4xl"></span>
          </div>
        </div>
        <div className="each-slide-effect h-screen">
          <div
            className="bg-center"
            style={{
              backgroundImage: "{props.PictureTwo}",
            }}
          >
            <span className="text-4xl"></span>
          </div>
        </div>
        <div className="each-slide-effect h-screen">
          <div
            className="bg-center"
            style={{
              backgroundImage: "{props.PictureThree}",
            }}
          >
            <span className="text-4xl"></span>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default SectionSlider;

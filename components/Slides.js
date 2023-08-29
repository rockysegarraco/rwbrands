import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Example = () => {
  const images = [
    "https://uj8.ad7.myftpupload.com/wp-content/uploads/2020/05/luxmore-grande-wedding-gian-carlo-photography-237-1-scaled.jpg",
    "https://uj8.ad7.myftpupload.com/wp-content/uploads/2020/05/luxmore-grande-wedding-gian-carlo-photography-312-1-scaled.jpg",
    "https://uj8.ad7.myftpupload.com/wp-content/uploads/2020/05/luxmore-grande-wedding-gian-carlo-photography-124-1-scaled.jpg",
  ];

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
            style={{ backgroundImage: `url(${images[0]})` }}
          >
            <span className="text-4xl">
              We celebrate love, happiness, + moments of joy <br /> with our
              family of clients. <br />
              <a
                href="#"
                className="text-2xl inline-flex underline underline-offset-8 uppercase mt-4 hover:text-[#eee7df]"
              >
                learn more
              </a>
            </span>
          </div>
        </div>
        <div className="each-slide-effect h-screen">
          <div
            className="bg-center"
            style={{ backgroundImage: `url(${images[1]})` }}
          >
            <span className="text-4xl">
              We celebrate love, happiness, + moments of joy <br /> with our
              family of clients. <br />
              <a
                href="#"
                className="text-2xl inline-flex underline underline-offset-8 uppercase mt-4 hover:text-[#eee7df]"
              >
                learn more
              </a>
            </span>
          </div>
        </div>
        <div className="each-slide-effect h-screen">
          <div
            className="bg-center"
            style={{ backgroundImage: `url(${images[2]})` }}
          >
            <span className="text-4xl">
              We celebrate love, happiness, + moments of joy <br /> with our
              family of clients. <br />
              <a
                href="#"
                className="text-2xl inline-flex underline underline-offset-8 uppercase mt-4 hover:text-[#eee7df]"
              >
                learn more
              </a>
            </span>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Example;

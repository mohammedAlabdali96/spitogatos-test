import React, { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import Carousel from "react-bootstrap/Carousel";

const Carousal = () => {
  const windowSize = useWindowSize();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return (
    <div className="carousel-landing mb-md-6">
      <Carousel
        autoPlay
        controls={false}
        activeIndex={index}
        onSelect={handleSelect}

      >
        <Carousel.Item className="d-flex align-items-start">
          <img
            width={windowSize !== "xlg" && windowSize !== "lg" ? 1030 : "false"}
            height={windowSize !== "xlg" && windowSize !== "lg" ? 400 : "false"}
            src={`${window.location.origin}/assets/slide.png`}
            alt="First slide"
          />

          <Carousel.Caption className="d-flex align-items-start">
            <div className="container py-4 py-xl-10">
              <div className="text-left">
                <h1 className="font-weight-bold">
                  <span style={{ borderBottom: "16px solid #B4FF00" }}>S.</span>
                  und Co
                </h1>
                <div className="pt-5">
                  <h5 className="font-weight-bold mt-5">
                    To take a trivial example, which of
                    <br className="d-none d-md-block" /> us ever undertakes
                    laborious <br className="d-none d-md-block" /> physical
                    exercise,except to obtain{" "}
                    <br className="d-none d-md-block" /> some advantage from it?
                  </h5>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={windowSize !== "xlg" && windowSize !== "lg" ? 1030 : "false"}
            height={windowSize !== "xlg" && windowSize !== "lg" ? 400 : "false"}
            src={`${window.location.origin}/assets/slide.png`}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={windowSize !== "xlg" && windowSize !== "lg" ? 1030 : "false"}
            height={windowSize !== "xlg" && windowSize !== "lg" ? 400 : "false"}
            src={`${window.location.origin}/assets/slide.png`}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousal;

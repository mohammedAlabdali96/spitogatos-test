import React from "react";
import Carousal from "../components/carousal";
import ContactFormFormik from "../components/contactFormFormik";
import useWindowSize from "../hooks/useWindowSize";
import ContactFormJS from "../components/contactFormJS";

const LandingPage = ({ data }) => {
  const windowSize = useWindowSize();

  if (!data) return null

  return (
    <>
      <Carousal />
      <div className="container py-6 py-lg-10">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img className="img-fluid" src="assets/camera.png" alt=" " />
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
            <div className="text-left pl-lg-10">
              <p className="font-weight-bold text-smi-gray mb-2">
                Since the 1500s
              </p>
              <h4 className="font-weight-bold mb-6">The standard</h4>
              <h6 className="font-weight-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt.
              </h6>
            </div>
          </div>

          <div className="col-12 col-lg-6 mt-10 order-1 order-lg-0  d-flex align-items-center justify-content-center">
            <div className="text-left pl-lg-10">
              <p className="font-weight-bold text-smi-gray mb-2">
                Since the 1500s
              </p>
              <h4 className="font-weight-bold mb-6">The standard</h4>
              <h6 className="font-weight-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h6>

              <button className="btn-spitogatos btn-primary mt-6">
                Search
              </button>
            </div>
          </div>
          <div
            className="col-12 col-lg-6 order-0 order-lg-1 mt-5 mt-lg-10 text-right pr-5"
            style={{ maxHeight: 364 }}
          >
            <img
              className="img-fluid"
              src="assets/pop-art-love-cushion.png"
              alt=" "
            />
          </div>
        </div>
      </div>
      <div>
        <div className="container-fluid mt-7">
          <div className="row">
            <div className="col-12 col-xl-5 p-0 order-2 order-xl-1">
              {/*delete when we have the map ready */}
              <img
                style={{
                  height:
                    windowSize === "xlg" || windowSize === "lg" ? 1010 : null,
                }}
                className="img-fluid"
                alt=" "
                src="assets/map.png"
              />
            </div>
            <div className="col-12 col-xl-7 order-1 order-xl-2 pt-10 pb-8 px-4 px-lg-10 bg-gray">
              <div className="px-5">
                <h4 className="font-weight-bold">Contact Us</h4>
                <h6 className="font-weight-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h6>
              </div>
              {/*<ContactForm data={data} />*/}
              <ContactFormJS data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

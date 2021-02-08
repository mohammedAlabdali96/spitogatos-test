import React, { useState, useEffect } from "react";
import classNames from "classnames";
import moment from "moment";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const location = useLocation();


  useEffect(() => {
    setNavbarExpanded(false);
  }, [location.pathname]);

  return (
    <>
      <div className="container-fluid bg-dark d-none d-lg-block">
        <Navbar
          collapseOnSelect
          expand="lg"
          expanded={navbarExpanded}
          onToggle={() => setNavbarExpanded(!navbarExpanded)}
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand className="ml-xl-5" href="/">
            <div style={{ top: 22 }} className="position-md-absolute pb-2">
              <img style={{ maxWidth: 65 }} src="/assets/logo.png" alt=" " />
            </div>
          </Navbar.Brand>

          <button className="btn btn-transparent mr-md-5 d-block d-lg-none ml-auto">
            <span
              style={{ fontSize: 35, fontWeight: 800 }}
              className="icon-Path-629"
            ></span>
          </button>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="d-lg-flex align-items-lg-stretch"
          >
            <Nav className="mx-auto d-flex align-items-stretch">
              <Link
                className={classNames(
                  "p-3 font-weight-bolder text-white text-decoration-none",
                  { selected: location.pathname.includes("/home") }
                )}
                to="/home"
              >
                Main One
              </Link>

              <Link
                className={classNames(
                  "p-3 font-weight-bolder text-white text-decoration-none",
                  { selected: location.pathname.includes("/page-one") }
                )}
                to="/page-one"
              >
                Page Two
              </Link>

              <Link
                className={classNames(
                  "p-3 font-weight-bolder text-white text-decoration-none",
                  { selected: location.pathname.includes("/page-two") }
                )}
                to="/page-two"
              >
                Page Three
              </Link>
              <Link
                className={classNames(
                  "p-3 font-weight-bolder text-white text-decoration-none",
                  { selected: location.pathname.includes("/page-three") }
                )}
                to="/page-three"
              >
                About Us
              </Link>
              <Link
                className={classNames(
                  "p-3 font-weight-bolder text-white text-decoration-none",
                  { selected: location.pathname.includes("/about-us") }
                )}
                to="/about-us"
              >
                Our Work
              </Link>
              <Link
                className={classNames(
                  "p-3 font-weight-bolder text-white text-decoration-none",
                  { selected: location.pathname.includes("/contact") }
                )}
                to="/contact"
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>

          <div className="font-weight-bolder text-white d-none d-md-block mr-5">
            <button className="btn btn-transparent text-white font-weight-bolder">
              EN
            </button>
            |{" "}
            <button className="btn btn-transparent text-white font-weight-bolder">
              GR
            </button>
          </div>
          <button className="btn btn-transparent mr-md-5 d-none d-lg-block">
            <span
              style={{ fontSize: 35, fontWeight: 800 }}
              className="icon-Path-629"
            ></span>
          </button>
        </Navbar>
      </div>
      <div className="d-lg-none d-block">
        <Navbar
          collapseOnSelect
          expand="xl"
          expanded={navbarExpanded}
          onToggle={() => setNavbarExpanded(!navbarExpanded)}
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand href="/">
            <div style={{ top: 22 }} className="position-xl-absolute pb-2">
              <img style={{ maxWidth: 65 }} src="/assets/logo.png" alt=" " />
            </div>
          </Navbar.Brand>

          {!navbarExpanded && (
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="ml-auto"
            />
          )}

          <button className="btn btn-transparent">
            <span
              style={{ fontSize: 35, fontWeight: 800 }}
              className="icon-Path-629"
            ></span>
          </button>
        </Navbar>
        {navbarExpanded && (
          <>
            <div
              className="d-flex text-center justify-content-center flex-column align-items-stretch bg-white"
              style={{ position: "relative", bottom: 84 }}
            >
              <div className="d-flex bg-dark justify-content-around align-items-center py-4">
                <h3 className="mx-auto text-white font-weight-bold pl-7">
                  Menu
                </h3>

                <button
                  className="btn btn-transparent"
                  onClick={() => setNavbarExpanded(!navbarExpanded)}
                >
                  <span className="icon-close h3"></span>
                </button>
              </div>
              <div className="p-7 d-flex flex-column text-center">
                <Link
                  className={classNames(
                    "py-3 px-2 p-xl-3 h3 font-weight-bolder text-dark text-decoration-none",
                    { selected: location.pathname.includes("/home") }
                  )}
                  to="/home"
                >
                  Main One
                </Link>

                <Link
                  className={classNames(
                    "py-3 px-2 p-xl-3 h3 font-weight-bolder text-dark text-decoration-none",
                    { selected: location.pathname.includes("/page-one") }
                  )}
                  to="/page-one"
                >
                  Page Two
                </Link>

                <Link
                  className={classNames(
                    "py-3 px-2 p-xl-3 h3 font-weight-bolder text-dark text-decoration-none",
                    { selected: location.pathname.includes("/page-two") }
                  )}
                  to="/page-two"
                >
                  Page Three
                </Link>
                <Link
                  className={classNames(
                    "py-3 px-2 p-xl-3 h3 font-weight-bolder text-dark text-decoration-none",
                    { selected: location.pathname.includes("/page-three") }
                  )}
                  to="/page-three"
                >
                  About Us
                </Link>
                <Link
                  className={classNames(
                    "py-3 px-2 p-xl-3 h3 font-weight-bolder text-dark text-decoration-none",
                    { selected: location.pathname.includes("/about-us") }
                  )}
                  to="/about-us"
                >
                  Our Work
                </Link>
                <Link
                  className={classNames(
                    "py-3 px-2 p-xl-3 h3 font-weight-bolder text-dark text-decoration-none",
                    { selected: location.pathname.includes("/contact") }
                  )}
                  to="/contact"
                >
                  Contact
                </Link>
                <div className="d-flex justify-content-center align-items-center text-center font-weight-bolder text-white  mr-xl-5">
                  <div>
                    <button className="btn btn-transparent text-dark font-weight-bolder">
                      EN
                    </button>
                    <span className="mx-1 text-smi-gray">|</span>
                    <button className="btn btn-transparent text-smi-gray font-weight-bolder">
                      GR
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-primary">
                <div className="pt-7 pb-8">
                  <span className="mx-2 h5 ">
                    <span className="icon-facebook"></span>
                  </span>
                  <span className="mx-2 h5">
                    <span className="icon-twitter"></span>
                  </span>
                  <span className="mx-2 h5">
                    <span className="icon-Path-3"></span>
                  </span>
                  <span className="mx-2 h5">
                    <span className="icon-Path-4"></span>
                  </span>
                </div>
                <div>
                  <h6 className="text-white font-weight-bold">
                    Cookies. | Privacy.
                  </h6>
                </div>
                <div className="text-left pl-5 font-weight-light text-white mt-8">
                  <p>S.und@themail.com</p>
                  <p>+30 210 1234 567</p>
                </div>
                <div className="text-white copy-right pl-5 mt-5 mb-3">
                  © The standard Copywrite {moment().format("YYYY")}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Header;

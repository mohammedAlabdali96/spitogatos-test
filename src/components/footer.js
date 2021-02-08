import React from "react";
import moment from "moment";

const Footer = () => (
  <div className="footer d-flex bg-dark justify-content-between px-3  px-md-8 py-2 align-items-center">
    <div className="d-flex align-items-center text-white copy-right">
      © The standard Copywrite {moment().format("YYYY")}
    </div>
    <div className="d-none d-md-flex align-items-center pr-10 mr-10">
      <h6 className="font-weight-bold text-white pr-10 mr-6">
        Cookies. <span className="mx-1">|</span> Privacy.
      </h6>
    </div>
    <div className="d-flex align-items-center">
      <img style={{ maxWidth: 32 }} src="/assets/logo.png" alt=" " />
    </div>
  </div>
);

export default Footer;

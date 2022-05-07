import React from "react";
import "./footer.css";

const Footer = (props) => {
  return (
    <div className="footerContainer">
      <div className="line"></div>
      <div className="footerContents">
        <img src={props.data} alt="" />
        <button className="footerBtn">Sign up</button>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="footerContainer">
      <div className="line"></div>
      <div className="footerContents">
        <img src={props.data} alt="" />
        <Link to='/register'><button className="footerBtn">Sign up</button></Link>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "./leftnav.css";
// import discordFace from "../assets/discordFace"

const LeftNav = () => {
  return (
    <div className="leftNavContainer">
      <img
        className="discordFace leftNavItems"
        src="../assets/discordFace.svg"
        alt=""
      />
      <img
        src="../assets/new_line.png"
        alt=""
        className="newLine leftNavItems"
      />
      <div className="plusDiv">
        <img src="../assets/plus.svg" alt="" className=" plus" />
      </div>
      <div className="downloadDiv">
        <img
          src="../assets/download.svg"
          alt=""
          className="download"
        />
      </div>
    </div>
  );
};

export default LeftNav;

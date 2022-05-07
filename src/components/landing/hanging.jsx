import React from "react";
import "./hanging.css";

const Hanging = (props) => {
  return (
    <div className="hangingContainer threeSection">
      <div className="hangingContent threeContent">
        <span className="hangingHeading threeHeading">
          Where hanging out is easy
        </span>
        <p className="hangingDesc threeDesc">
          Grab a seat in a voice channel when you're free. Friend in your server can see you're around and instantly pop into talk without having to call
        </p>
      </div>
      <img src={props.img} alt="" className="inviteImg threeImg" />
    </div>
  );
};

export default Hanging;

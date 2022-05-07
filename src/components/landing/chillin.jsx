import React from "react";
import "./chillin.css";

const Chillin = (props) => {
  return (
    <div className="chillinContainer">
      <div className="chillinContent">
        <span className="chillinHeading">RELIABLE TECH FOR STYING CLOSE</span>
        <p className="chillinDesc threeDesc">
          Low-latency voice and video feels like you're in the same room. Wave
          hello over videos, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </p>
      </div>
      <img src={props.img} alt="" className="chillinImg" />
      <span className="chillinSecHeading">Ready to start your journey?</span>
      <button className="chillinBtn">
        {/* <img src={props.imgBtn} alt="" className="chillinDownload" /> */}
        <div className="svg">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><g><rect fill="none" height="24" width="24"/></g><g><path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"/></g></svg>
        </div>
        Download for Mac
      </button>
    </div>
  );
};

export default Chillin;

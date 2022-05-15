import React from "react";


import LeftNav from "./dashboardComponents/leftnav";
import NextLeftNav from "./dashboardComponents/nextleftnav";
import TopNav from "./dashboardComponents/topnav";

import "./dashboard.css";

const DashBoard = () => {
  return (
    <div className="dashboardContainer">
      <LeftNav />
      <NextLeftNav />
      <TopNav />
    </div>
  );
};

export default DashBoard

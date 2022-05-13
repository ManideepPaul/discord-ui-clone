import React from "react";


import LeftNav from "./dashboardComponents/leftnav";
import NextLeftNav from "./dashboardComponents/nextleftnav";

import "./dashboard.css";

const DashBoard = () => {
  return (
    <div className="dashbordContainer">
      <LeftNav />
      <NextLeftNav />
    </div>
  );
};

export default DashBoard

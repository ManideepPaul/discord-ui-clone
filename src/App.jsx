import React from "react";
import discordLogo from "../assets/discord_main_logo.svg";
import Center_landing from "../assets/center_bg_landing_header.svg";
import Left_landing from "../assets/left_bg_landing_header.svg";
import Right_landing from "../assets/right_bg_landing_header.svg";
import Download_logo from "../assets/download.svg";
import NavBar from "./components/navbar";
import HeroSection from "./components/herosection";
import "./App.css";
function App() {
  return (
    <div className="mainContainer">
      <NavBar data={discordLogo} />
      <HeroSection
        imgLeft={Left_landing}
        imgCenter={Center_landing}
        imgRight={Right_landing}
        download={Download_logo}
      />
    </div>
  );
}

export default App;

import React from "react";

import NavBar from "./components/navbar";
import HeroSection from "./components/herosection";
import Invite from "./components/invite";
import Hanging from "./components/hanging"

import discordLogo from "../assets/discord_main_logo.svg";
import Center_landing from "../assets/center_bg_landing_header.svg";
import Left_landing from "../assets/left_bg_landing_header.svg";
import Right_landing from "../assets/right_bg_landing_header.svg";
import Download_logo from "../assets/download.svg";
import Invite_only from "../assets/invite_only_landing.svg"
import Hanging_out from "../assets/hanging_out_easy_landing.svg";

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
      <Invite img={Invite_only} />
      <Hanging img={Hanging_out}/>
    </div>
  );
}

export default App;

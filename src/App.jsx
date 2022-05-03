import React from "react";

import NavBar from "./components/navbar";
import HeroSection from "./components/herosection";
import Invite from "./components/invite";
import Hanging from "./components/hanging"
import Fandom from "./components/fandom";
import Chillin from "./components/chillin";

import discordLogo from "../assets/discord_main_logo.svg";
import Center_landing from "../assets/center_bg_landing_header.svg";
import Left_landing from "../assets/left_bg_landing_header.svg";
import Right_landing from "../assets/right_bg_landing_header.svg";
import Invite_only from "../assets/invite_only_landing.svg"
import Hanging_out from "../assets/hanging_out_easy_landing.svg";
import Fandom_logo from "../assets/fandom_landing.svg"
import Chillin_img from "../assets/just_chiling_landing.svg"

import "./App.css";

function App() {
  return (
    <div className="mainContainer">
      <NavBar data={discordLogo} />
      <HeroSection
        imgLeft={Left_landing}
        imgCenter={Center_landing}
        imgRight={Right_landing}
      />
      <Invite img={Invite_only} />
      <Hanging img={Hanging_out}/>
      <Fandom img={Fandom_logo} />
      <Chillin img={Chillin_img} />
    </div>
  );
}

export default App;

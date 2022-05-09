import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Landing Page Imports
import NavBar from "./components/landing/navbar";
import HeroSection from "./components/landing/herosection";
import Invite from "./components/landing/invite";
import Hanging from "./components/landing/hanging";
import Fandom from "./components/landing/fandom";
import Chillin from "./components/landing/chillin";
import Resourse from "./components/landing/resourse";
import Footer from "./components/landing/footer";
// Landing Page Imports

// Login Imports 
import Login from "./components/login/login";
// Login Imports 

import discordLogo from "../assets/discord_main_logo.svg";
import Center_landing from "../assets/center_bg_landing_header.svg";
import Left_landing from "../assets/left_bg_landing_header.svg";
import Right_landing from "../assets/right_bg_landing_header.svg";
import Invite_only from "../assets/invite_only_landing.svg";
import Hanging_out from "../assets/hanging_out_easy_landing.svg";
import Fandom_logo from "../assets/fandom_landing.svg";
import Chillin_img from "../assets/just_chiling_landing.svg";
import USA_flag from "../assets/usa_flag.png";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="mainContainer">
          <NavBar data={discordLogo} />
          <HeroSection
            imgLeft={Left_landing}
            imgCenter={Center_landing}
            imgRight={Right_landing}
          />
          <Invite img={Invite_only} />
          <Hanging img={Hanging_out} />
          <Fandom img={Fandom_logo} />
          <Chillin img={Chillin_img} />
          <Resourse usa={USA_flag} />
          <Footer data={discordLogo} />
        </div>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

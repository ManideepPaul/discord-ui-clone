import React from "react";
import discordLogo from "../assets/discord_main_logo.svg";
import NavBar from "./components/navbar";
import "./App.css";
function App() {
  return (
    <div className="mainContainer">
      <div className="heroContainer">
        <NavBar  data={discordLogo}/>
        
      </div>
    </div>
  );
}

export default App;

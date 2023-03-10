import React from "react";
import "./styles.css";
import Star from "./Star";
import Application from "./Application";

function handleFontInc() {
  console.log("Font Inc");
}

function handleFontDec() {
  console.log("Font Dec");
}

export default function Home() {
  return (
    <div id="home">
      <div id="sub-navbar">
        <div id="font-setter">
          <p>Increase / Decrease font:</p>
          <button className="btn" onClick={handleFontInc}>
            A+
          </button>
          <button className="btn" onClick={handleFontDec}>
            A-
          </button>
        </div>
        <div id="lang-setter">
          <p>Select Language :</p>
          <select className="btn">
            <option>Hindi</option>
            <option>English</option>
          </select>
        </div>
      </div>

      <div className="note">
        <h2>
          Note: Fields marked with asterisks (<Star />) are mandatory to fill
        </h2>
      </div>
      <div className="app-container">
        <Application />
      </div>
    </div>
  );
}

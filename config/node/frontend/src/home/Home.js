import React from "react";
import "./Home.css";
import zdjecie from "./01_mapa_wat.png";

function Home() {
  return (
    <div className="home">
      <div className="home_top">
        <div>O projekcie</div>
      </div>
      <div className="home_bottom">
        <div className="home_left">
          <img className="home_logo" src={zdjecie} alt="logo" />
        </div>
        <div className="home_right">
          <h1 className="home_title">
            <span style={{ color: "#276CD3", opacity: 0.7 }}>GEO</span>Portal
          </h1>
          <div className="home_subtitle">
            Stona internetowa z interaktywną mapą
          </div>
          <button className="home_button">WCHODZĘ!</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

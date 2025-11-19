import React, { useState } from "react";
import imgInMind from "../assets/InMind_page-0001.png";
import ButtonsHome from "./buttons-home/ButtonsHome";
import ButtonEnter from "../components/ButtonEnter";
import styles from "./Home.css";

const Home = () => {
  return (
    <div>
      {/* Nav-Bar da página */}
      <nav className="nav-bar">
        {/* Logo da marca no Nav-bar */}
        <img src={imgInMind} alt="Foto da logo" className="imgInMind" />

        <ButtonsHome />

        <ButtonEnter className="buttonEnter" />
      </nav>
      {/* Nav-Bar da página */}

      <div className="body">
        <div className="schedule">
          <h1>Agende</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;

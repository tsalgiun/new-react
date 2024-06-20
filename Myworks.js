import React, { useState } from "react";
import "./Mywork.css";
import Tictacs from "./components/tic tac - xo/Tictacs";
import Game1s from "../src/Game1s";
import Lesson33 from "./picture/Lesson33";
import Clickspeed from "./components/Clickspeed";
//import Qust from "./components/Qustave";
import Qustave from "./components/Qustave";
//import Youtube2 from"./components/Youtube2.0.html"
//import playMusic from"./music/game.mp3"
import Menu from "./components/Menu";

const Myworks = () => {
  const [content, setContent] = useState("");
  const XO = () => {
    setContent(1);
  };
  const Game = () => {
    setContent(2);
  };
  const Movie = () => {
    setContent(3);
  };
  const Clickfast = () => {
    setContent(4);
  };
  const Qust = () => {
    setContent(5);
  };
  const hiYoutube = () => {
    setContent(6);
  };
  const onClickMenu = () => {
    setContent(7);
  };

  return (
    <div className="back">
      <div className="conatainer1">
        <h1>Welcome, created by tsalgiun</h1>
        <button className="ox" onClick={XO}>
          O,X game
        </button>
        <button className="game" onClick={Game}>
          too taagaarai!
        </button>
        <button className="movie" onClick={Movie}>
          movie web
        </button>
        <button className="Clickfast" onClick={Clickfast}>
          fast Clickfast
        </button>
        <button className="Qustave" onClick={Qust}>
          memory game
        </button>
        <button className="Youtube" onClick={hiYoutube}>
          Youtube
        </button>
        <button className="Menu" onClick={onClickMenu}>
          information
        </button>
      </div>
      <div className="troll">
        {content === 1 && <Tictacs />}
        {content === 2 && <Game1s />}
        {content === 3 && <Lesson33 />}
        {content === 4 && <Clickspeed />}
        {content === 5 && <Qustave />}
        {content === 7 && <Menu />}
      </div>
    </div>
  );
};

export default Myworks;

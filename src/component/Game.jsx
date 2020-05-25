import React from "react";
import Block from "./Block";

const Game = ({ grid }) => {
  return (
    <div className="grid">
      {grid.map((num, i) => (
        <Block key={i} num={num === '0' ? '' : num}/>
      ))}
    </div>
  );
};

export default Game;

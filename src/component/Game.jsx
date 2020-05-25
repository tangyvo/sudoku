import React from "react";
import Block from "./Block";

const Game = ({ grid }) => {
  return (
    <div className="grid">
      {grid.map((block) => (
        <Block>{block}</Block>
      ))}
    </div>
  );
};

export default Game;

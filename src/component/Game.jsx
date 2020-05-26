import React from "react";
import Block from "./Block";

const Game = ({ grid, originalGrid, userInput, gameStart, focus, handleFocus }) => {
  return (
    <div className="grid">
      {/* {console.log(grid)} */}
      {grid.map((num, i) => (
        <Block
          key={i}
          num={num}
          original={originalGrid[i]}
          index={i}
          userInput={userInput}
          gameStart={gameStart}
          focus={focus}
          handleFocus={handleFocus}

        />
      ))}
    </div>
  );
};

export default Game;

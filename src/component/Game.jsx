import React from "react";
import Block from "./Block";

const Game = ({ grid, originalGrid, userInput, gameStart, focus, handleFocus, note, noteArr }) => {
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
          note={note}
          noteArr={noteArr[i]}
        />
      ))}
    </div>
  );
};

export default Game;
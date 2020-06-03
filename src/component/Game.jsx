import React from "react";
import Block from "./Block";

const Game = ({ grid, originalGrid, userInput, isPlaying, focus, handleFocus, noteModeOn, noteArr, highlightNum, helpMode }) => {
  return (
    <div className="grid">
      {grid.map((num, i) => (
        <Block
          key={i}
          num={num}
          original={originalGrid[i]}
          index={i}
          userInput={userInput}
          isPlaying={isPlaying}
          focus={focus}
          handleFocus={handleFocus}
          noteModeOn={noteModeOn}
          noteArr={noteArr[i]}
          highlightNum={highlightNum}
          helpMode={helpMode}
        />
      ))}
    </div>
  );
};

export default React.memo(Game);
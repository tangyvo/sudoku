import React from "react";
import Block from "./Block";

const Game = ({
  grid,
  originalGrid,
  userInput,
  focus,
  handleFocus,
  noteModeOn,
  noteArr,
  highlightNum,
  helpMode,
}) => {
  return (
    <div className="grid">
      {grid.map((num, i) => (
        <Block
          key={i}
          num={num}
          original={originalGrid[i]}
          index={i}
          userInput={userInput}
          focus={focus}
          handleFocus={handleFocus}
          noteModeOn={noteModeOn}
          noteArr={noteArr[i]}
          highlightNum={highlightNum}
          helpMode={helpMode}
          grid={grid}
        />
      ))}
    </div>
  );
};

export default React.memo(Game);

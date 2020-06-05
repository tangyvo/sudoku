import React from "react";

const Block = ({
  userInput,
  num,
  original,
  index,
  focus,
  handleFocus,
  noteModeOn,
  noteArr,
  highlightNum,
  helpMode,
  grid
}) => {
  return (
    <>
      {original !== "0" ? (
        <div
          id={index}
          className={
            highlightNum.includes(index) && helpMode
              ? "original highlight"
              : index === focus
              ? "na-focus original"
              : "original"
          }
        >
          {original}
        </div>
      ) : (num === "0" || num === "") &&
        (noteArr[1].length > 0 || noteModeOn) ? (
        <div
          id={index}
          onClick={() => handleFocus(index)}
          className={
            focus === index && noteModeOn
              ? "note-mode notes"
              : focus === index
              ? "notes na-focus"
              : "notes"
          }
        >
          {noteArr[1].map((val) => (
            <div key={Math.random()} className={`note note${val} show`}>
              {val}
            </div>
          ))}
        </div>
          ) : (grid.filter(block => block === '0' || block === '').length === 81) ? (
        <div className="block" id={index}></div>
      ) : (
        <input
          id={index}
          maxLength="1"
          type="number"
          inputMode='numeric'
          className={
            highlightNum.includes(index) && helpMode && index !== focus
              ? "block highlight"
              : index === focus
              ? "block focus"
              : "block"
          }
          value={num === "0" ? "" : num}
          onChange={(e) => userInput(e, index)}
          onClick={() => handleFocus(index)}
        />
      )}
    </>
  );
};

export default React.memo(Block);
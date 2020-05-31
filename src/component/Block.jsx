import React from "react";

const Block = ({
  userInput,
  num,
  original,
  index,
  isPlaying,
  focus,
  handleFocus,
  noteModeOn,
  noteArr,
}) => {
  return (
    <>
    {/* <div className="block">{index}</div> */}
      {original !== "0" ? (
        <div
          id={index}
          className={(index === focus ? "na-focus original" : "original")}
        >
          {original}
        </div>
      ) : (num === "0" || num === '') && (noteArr[1].length > 0 || noteModeOn) ? (
        <div
          id={index}
            onClick={() => handleFocus(index)}
          className={(focus === index && noteModeOn) ? "note-mode notes" : focus === index ? "notes na-focus" : 'notes'}
        >
          {noteArr[1].map(val => (
            <div key={Math.random()} className={`note note${val} show`}>
              {val}
            </div>
          ))}
        </div>
      ) : !isPlaying ? (
        <div className="block" id={index}></div>
      ) : (
        <input
          id={index}
          maxLength="1"
          type="textbox"
          className={index === focus ? "block focus" : "block"}
          value={num === "0" ? "" : num}
          onChange={(e) => userInput(e, index)}
          onClick={() => handleFocus(index)}
        />
      )}
    </>
  );
};

export default Block;
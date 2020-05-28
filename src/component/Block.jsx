import React from "react";
import Notes from './Notes';

const Block = ({
  userInput,
  num,
  original,
  index,
  gameStart,
  focus,
  handleFocus,
}) => {
  return (
    <>
      {/* <div className="block">{index}</div> */}
      <div className="block notes">
        <Notes />
      </div>
      {/* {original !== "0" ? (
        <div
          id={index}
          className={index === focus ? "original focus" : "original"}
        >
          {original}
        </div>
      ) : !gameStart ? (
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
      )} */}
    </>
  );
};

export default Block;

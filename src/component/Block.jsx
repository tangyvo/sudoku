import React from "react";

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
      {original !== "0" ? (
        <div className={index === focus ? "original focus" : "original"}>
          {original}
        </div>
      ) : !gameStart ? (
        <div className="block"></div>
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

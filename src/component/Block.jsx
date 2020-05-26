import React from "react";

const Block = ({ userInput, num, original, index, gameStart }) => {
  return (
    <>
    {/* <div className="block">{index}</div> */}
      {original !== "0" ? (
        <div className="original">{original}</div>
      ) : original === "0" && gameStart ? (
        <div className="block"></div>
      ) : (
        <input
        maxLength='1'
        onFocus='true'
          type="textbox"
          className="block"
          value={num === '0' ? '' : num}
          onChange={(e) => userInput(e, index)}
        />
      )}
    </>
  );
};

export default Block;

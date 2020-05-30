import React from "react";
import Notes from "./Notes";

const Block = ({
  userInput,
  num,
  original,
  index,
  gameStart,
  focus,
  handleFocus,
  noteArr,
}) => {
  return (
    <>
      {/* <div className="block">{index}</div> */}

      {original !== "0" ? (
        <div
          id={index}
          className={index === focus ? "original focus" : "original"}
        >
          {original}
        </div>
      ) : num === "0" && noteArr[1].length > 0 ? (
        <div id={index} className={focus === index ? 'block focus notes' : 'block notes'}>
          {noteArr[1].map((val, ind) => (
            <div key={Math.random()} className={`note note${val} show`}>
              {val}
            </div>
          ))}
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
      )}
    </>
  );
};

export default Block;

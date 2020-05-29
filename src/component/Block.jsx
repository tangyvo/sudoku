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
  note,
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
      ) : (num === "0" && noteArr[focus][1].length > 0) ? (
        <div id={index} className={"block notes focus red"}>
            <Notes key={index} noteArr={noteArr[focus][1]} index={index} />
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

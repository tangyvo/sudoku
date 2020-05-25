import React from "react";

const Block = ({num, userInput}) => {
  return <input type="textbox" className={`block`} value={num} onChange={userInput}/>
};

export default Block;

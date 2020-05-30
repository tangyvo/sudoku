import React from "react";

const Notes = ({ noteArr, index }) => {

  
  return (
    <>
    {console.log(noteArr)}
    {noteArr.map(num => 
      <div key={Math.random()} className={`note note${num} show`}>{num}</div>
      )}

    </>
  );
};

export default Notes;

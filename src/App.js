import React, { useState } from "react";
import Game from "./component/Game";
import Menu from "./component/Menu";

const App = () => {
  const [grid, setGrid] = useState(Array(81).fill(null));
  const [difficulty, setDifficulty] = useState("easy");

  const handleStart = () => {
    const api = `https://sugoku.herokuapp.com/board?difficulty=${difficulty}`;
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setGrid(data.board.join(",").split(','));
      });
  };

  const handleDifficulty = e => {
      setDifficulty(e.target.value)
  }

  const userInput = e => {
      console.log(e)
  }

  return (
    <>
      <div className="app">
        <Game grid={grid} />
        <Menu
          handleStart={handleStart}
          handleDifficulty={handleDifficulty}
          userInput={userInput}
        />
      </div>
    </>
  );
};

export default App;

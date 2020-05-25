import React from "react";

const Menu = ({ handleStart, handleDifficulty, timer, gameStart }) => {
  return (
    <nav className="menu">
      <h1 className="title">Sudoku</h1>
      <p>Timer:</p>
      <div className="timer">{timer}</div>
      <p>Difficulty:</p>
      <select onChange={handleDifficulty}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button
        className={gameStart ? "btn btn-start" : "active btn btn-start"}
        onClick={handleStart}
        disabled={gameStart ? true : false}
      >
        Start
      </button>
      <button
        className={!gameStart ? "btn btn-submit" : " btn btn-submit active"}
        disabled={gameStart ? true : false}
      >
        Submit
      </button>
    </nav>
  );
};

export default Menu;

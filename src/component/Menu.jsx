import React from "react";

const Menu = ({ handleStart, handleDifficulty }) => {
  return (
    <nav className="menu">
      <h1 className="title">Sudoku</h1>
      <p>Timer:</p>
      <div className="timer">00:00</div>
      <p>Difficulty:</p>
      <select onChange={handleDifficulty}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button className="btn btn-start active" onClick={handleStart}>
        Start
      </button>
      <button className="btn btn-submit">Submit</button>
    </nav>
  );
};

export default Menu;

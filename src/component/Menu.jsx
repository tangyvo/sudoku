import React from "react";

const Menu = () => {
  return (
    <nav className="menu">
      <h1 className="title">Sudoku</h1>
      <p>Timer:</p>
      <div className="timer">00:00</div>
      <p>Difficulty:</p>
      <select>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
      <button className="btn btn-start active">Start</button>
      <button className="btn btn-submit">Submit</button>
    </nav>
  );
};

export default Menu;

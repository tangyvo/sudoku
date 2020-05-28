import React from "react";

const Menu = ({
  newGame,
  handleSubmit,
  handleDifficulty,
  timer,
  fullGrid,
  error,
  undo,
  gameStart,
  noteMode,
  note
}) => {
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
      <button className="btn btn-start active" onClick={newGame}>
        New Game
      </button>
      <div className="btn-small">
        <button
          className={gameStart ? "btn btn-undo active" : "btn btn-undo"}
          onClick={undo}
        >
          Undo
        </button>

        <button className="btn btn-notes active" onClick={noteMode}>{note ? 'Note: ON' : 'Note: OFF'}</button>
      </div>
      <button
        className={fullGrid ? "btn btn-submit active" : " btn btn-submit"}
        disabled={fullGrid ? false : true}
        onClick={handleSubmit}
      >
        Submit
      </button>

      <p className={error ? "error show" : "error"}>Oops! Try again ...</p>
    </nav>
  );
};

export default Menu;

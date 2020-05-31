import React from "react";
import { BrowserView, MobileView } from "react-device-detect";

const Menu = ({
  showModal,
  handleSubmit,
  handleDifficulty,
  timer,
  isFullGrid,
  error,
  undo,
  isPlaying,
  gridHistory,
  noteModeOn,
  handleNoteMode,
}) => {
  return (
    <nav className="menu">
      <h1 className="title">Sudoku</h1>
      <p className="subtitle">Timer:</p>
      <div className="timer">{timer}</div>
      <p className="subtitle">Difficulty:</p>
      <select className="diffculty" onChange={handleDifficulty}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <button className="btn btn-start active" onClick={showModal}>
        New Game
      </button>
      <div className="btn-small">
        <button
          className={
            isPlaying && gridHistory.length > 1
              ? "btn btn-undo active"
              : "btn btn-undo"
          }
          onClick={undo}
        >
          Undo
        </button>

        <button
          className={
            noteModeOn && isPlaying
              ? "btn btn-notes"
              : isPlaying
              ? "btn active"
              : "btn"
          }
          onClick={handleNoteMode}
        >
          {noteModeOn ? "Note: ON" : "Note: OFF"}
        </button>
      </div>

      <BrowserView>
        <p className="note-message">
          <strong>IN NOTE MODE:</strong> type numbers 1-9 to add and remove from cell.
        </p>
      </BrowserView>

      <MobileView>
        <p className="note-message">Note mode is not available on mobile.</p>
      </MobileView>
      <button
        className={isFullGrid ? "btn btn-submit active" : "btn btn-submit"}
        disabled={isFullGrid ? false : true}
        onClick={handleSubmit}
      >
        Submit
      </button>
      <p className={error ? "error show" : "error"}>Oops! Try again</p>
    </nav>
  );
};

export default Menu;
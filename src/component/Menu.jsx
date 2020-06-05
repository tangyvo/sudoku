import React from "react";
import { isBrowser } from "react-device-detect";
import Timer from "./Timer";

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
  toggleHelpMode,
}) => {
  return (
    <nav className="menu">
      <h1 className="title">Sudoku</h1>
      <div>
        <p className="subtitle">Timer:</p>
        <Timer timer={timer} />
      </div>
      <div>
        <p className="subtitle">Difficulty:</p>
        <select className="diffculty" onChange={handleDifficulty}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button className="btn btn-start active" onClick={showModal}>
        New Game
      </button>
      <div>
        <label className="help-label">
          {" "}
          Help Mode:
          <input
            type="checkbox"
            className="help-checkbox"
            onChange={toggleHelpMode}
          />
        </label>
      </div>

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
            noteModeOn && isPlaying && isBrowser
              ? "btn btn-notes"
              : isPlaying && isBrowser
              ? "btn active"
              : "btn"
          }
          onClick={handleNoteMode}
        >
          {noteModeOn && isBrowser ? "Note: ON" : "Note: OFF"}
        </button>
      </div>

      <div className="note-message">
        <strong>IN NOTE MODE:</strong>{" "}
        {isBrowser
          ? "type numbers 1-9 to add and remove from cell."
          : "Note mode is not available on mobile."}
      </div>

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

export default React.memo(Menu);

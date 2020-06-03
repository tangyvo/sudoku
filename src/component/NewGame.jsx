import React from "react";

const NewGame = ({ startGame, showNewGameModal, hideModal }) => {
  return (
    <div className={showNewGameModal ? "modal show" : "modal"}>
      <div className="modal-content">
        <h3 className="modal-title">HOW TO PLAY SUDOKU</h3>
        <ul>
          <li>
            Fill in the numbers 1-9 exactly once in every row, column and 3x3
            block area.
          </li>
          <br />
          <h3 className="modal-title">Keyboard Controls:</h3>
          <li>
            Press the <strong>spacebar</strong> key to toggle note mode on and
            off.
          </li>
          <li>
            Use <strong>up</strong>, <strong>down</strong>,{" "}
            <strong>left</strong> & <strong>right</strong> arrow keys to
            move between cell.
          </li>
        </ul>
        <button className="btn btn-newgame" onClick={startGame}>
          Start
        </button>
        <button className="modal-close" onClick={hideModal}>
          x
        </button>
      </div>
    </div>
  );
};

export default NewGame;
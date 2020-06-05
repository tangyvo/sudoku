import React from "react";
import { BrowserView } from "react-device-detect";

const NewGame = ({ startGame, showNewGameModal, hideModal }) => {
  return (
    <div className={showNewGameModal ? "modal show" : "modal"}>
      <div className="modal-content">
        <ol>
          <h3 className="modal-title">HOW TO PLAY:</h3>
          <li>
            Fill in the numbers 1-9 exactly once in every row, column and 3x3
            block area.
          </li>
          <BrowserView>
            <h3 className="modal-title">KEYBOARD CONTROLS:</h3>
            <li>
              <strong>↑→↓←</strong> arrow keys to move
              between cells.
            </li>
            <li>
              <strong>Spacebar</strong> key to toggle note mode on and
              off.
            </li>
            <li>
              <strong>R</strong> key to erase all notes from a cell.
            </li>
          </BrowserView>
        </ol>
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

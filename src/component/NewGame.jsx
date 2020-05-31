import React from "react";

const NewGame = ({ startGame, showNewGameModal, hideModal}) => {
  return (
      <div className={showNewGameModal ? 'modal show' : 'modal'}>
      <div className="modal-content">
        <h3 className="modal-title">Instructions</h3>
        <ul>
          <li>
            Fill in the numbers 1-9 exactly once in every row, column and 3x3
            block
          </li>
          {/* <li>
            Click on the 'Note' button or press the spacebar key to switch on or
            off note mode
          </li> */}
        </ul>
              <button className="btn btn-newgame" onClick={startGame}>
          Start
        </button>
        <button className="modal-close" onClick={hideModal}>x</button>
      </div>
    </div>
  );
};

export default NewGame;

import React from "react";

const Won = ({ hasWon, startGame, showWonModal, hideModal }) => {
  return (
    <div className={hasWon && showWonModal ? "show modal" : "modal"}>
      <div className="modal-content">
        <p>You've Won!</p>
        <button className="btn btn-newgame" onClick={startGame}>
          Play Again
        </button>
        <button className="modal-close" onClick={hideModal}>
          x
        </button>
      </div>
    </div>
  );
};

export default Won;

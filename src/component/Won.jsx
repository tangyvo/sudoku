import React from "react";

const Won = ({ timer, startGame, showWonModal, hideModal }) => {
  return (
    <div className={showWonModal ? "show modal" : "modal"}>
      <div className="modal-content">
        <p>You've Won!</p>
        <h4>Your time was {timer} </h4>
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
import React from 'react';

const Won = ({ won, newGame }) => {
    return (
        <div className={won ? 'won show' : 'won'}>
            <p>You've Won!</p>
            <button className="btn btn-newgame" onClick={newGame}>Play Again</button>
        </div>
    )
}

export default Won;
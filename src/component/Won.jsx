import React from 'react';

const Won = ({ hasWon, newGame }) => {
    return (
        <div className={hasWon ? 'won show' : 'won'}>
            <p>You've Won!</p>
            <button className="btn btn-newgame" onClick={newGame}>Play Again</button>
        </div>
    )
}

export default Won;
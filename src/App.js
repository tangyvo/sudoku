import React, {useState} from 'react';
import Game from './component/Game';
import Menu from './component/Menu';

const App = () => {
    const [grid, setGrid] = useState(Array(81).fill(null));


    return (
        <>

        <div className="app">
        <Game grid={grid}/>
        {console.log(grid)}
        <Menu />
        </div>
        </>
    )
}

export default App;
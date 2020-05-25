import React, { useState, useEffect } from "react";
import Game from "./component/Game";
import Menu from "./component/Menu";

const App = () => {
  const [originalGrid, setOrginalGrid] = useState(Array(81).fill("0"));
  const [grid, setGrid] = useState(Array(81).fill(""));
  const [difficulty, setDifficulty] = useState("easy");
  const [gameStart, setGameStart] = useState(false);
  const [timer, setTimer] = useState("00:00");

  const handleStart = () => {
    const api = `https://sugoku.herokuapp.com/board?difficulty=${difficulty}`;
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setGrid(data.board.join(",").split(","));
        setOrginalGrid(data.board.join(",").split(","));
        setGameStart(true);
      });
  };

  useEffect(() => {
    if (gameStart) {
      let seconds = 0;
      let mins;
      let sec = 0;
      setInterval(() => {
        seconds += 1;
        if (seconds >= 60) {
          mins = Math.floor(seconds / 60);
          sec = seconds % 60;
          mins = mins === 0 ? "00" : mins <= 9 ? `0${mins}` : mins;
        } else {
          sec = seconds;
          mins = "00";
        }
        sec = sec === 0 ? "00" : sec <= 9 ? `0${sec}` : sec;
        let time = `${mins}:${sec}`;
        setTimer(time);
      }, 1000);
    }
  }, [gameStart]);

  const handleDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const userInput = (e, index) => {
    const input = Number(e.target.value);
    if (input >= 1 || input <= 9) {
      let gridCopy = [...grid];
      gridCopy[index] = e.target.value;
      setGrid(gridCopy);
    }
    return e.target.value;
  };

  return (
    <>
      <div className="app">
        <Game grid={grid} originalGrid={originalGrid} userInput={userInput} />
        <Menu
          handleStart={handleStart}
          handleDifficulty={handleDifficulty}
          timer={timer}
          gameStart={gameStart}
        />
      </div>
    </>
  );
};

export default App;

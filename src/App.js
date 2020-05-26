import React, { useState, useEffect, useRef } from "react";
import Game from "./component/Game";
import Menu from "./component/Menu";
import Won from "./component/Won";
import { Winners } from "./component/WinningCombination";

const App = () => {
  const [originalGrid, setOrginalGrid] = useState(Array(81).fill("0"));
  const [grid, setGrid] = useState(Array(81).fill(""));
  const [difficulty, setDifficulty] = useState("easy");
  const [gameStart, setGameStart] = useState(false);
  const [timer, setTimer] = useState("00:00");
  const [fullGrid, setFullGrid] = useState(false);
  const [error, setError] = useState(false);

  const [won, setWon] = useState(false);

  const newGame = () => {
    setGameStart(false);
    setWon(false);

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
    let emptyBlock = grid.filter((block) => block === "0" || block === '').length;
    if (emptyBlock === 0 && gameStart) {
      setFullGrid(true);
    } else {
      setFullGrid(false);
    }
  }, [grid]);

  const handleSumbit = () => {
    let noMatch = false;
    for (let arr of Winners) {
      let combination = [];
      for (let i = 0; i < 9; i++) {
        combination.push(grid[arr[i]]);
      }
      combination = combination.sort().join("");
      if (combination !== "123456789") {
        console.log(combination, "no match", 'ARRAY: ', arr);
        noMatch = true;
        setError(true);
      }
    }

    if (!noMatch) {
      console.log(`you've won`);
      setError(false);
      setWon(true);
      let endTime = timer;
      setTimer(endTime);
    }
  };

  useEffect(() => {
    if (!gameStart) return;

    if (won) {
      let endTime = timer;
      setTimer(endTime);
      return;
    }
    let seconds = 0;
    let mins;
    let sec = 0;
    const timeRef = setInterval(() => {
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

    return () => {
      clearInterval(timeRef);
    };
  }, [gameStart, won]);

  const handleDifficulty = (e) => {
    setDifficulty(e.target.value);
  };

  const userInput = (e, index) => {
    const input = Number(e.target.value);
    if (input >= 1 || input <= 9) {
      let gridCopy = [...grid];
      gridCopy[index] = e.target.value;
      // gridCopy.map(block => block === '' ? block = '0' : block);
      setGrid(gridCopy);
    }

    return e.target.value;
  };

  return (
    <>
      <div className="app">
        <Game grid={grid} originalGrid={originalGrid} userInput={userInput} />
        <Menu
          newGame={newGame}
          handleDifficulty={handleDifficulty}
          timer={timer}
          gameStart={gameStart}
          fullGrid={fullGrid}
          handleSubmit={handleSumbit}
          error={error}
        />
      </div>
      <Won won={won} newGame={newGame} />
    </>
  );
};

export default App;

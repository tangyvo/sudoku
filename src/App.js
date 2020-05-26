import React, { useState, useEffect, useRef } from "react";
import Game from "./component/Game";
import Menu from "./component/Menu";
import Won from "./component/Won";
import { Winners } from "./component/WinningCombination";

const App = () => {
  const [originalGrid, setOrginalGrid] = useState(Array(81).fill("0"));
  const [gridHistory, setGridHistory] = useState([]);
  const [grid, setGrid] = useState(Array(81).fill(""));
  const [difficulty, setDifficulty] = useState("easy");
  const [gameStart, setGameStart] = useState(false);
  const [timer, setTimer] = useState("00:00");
  const [fullGrid, setFullGrid] = useState(false);
  const [error, setError] = useState(false);
  const [focus, setFocus] = useState(null);

  const [won, setWon] = useState(false);

  const newGame = () => {
    setGameStart(false);
    setWon(false);

    const api = `https://sugoku.herokuapp.com/board?difficulty=${difficulty}`;
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        let grid = data.board.join(",").split(",");
        setGrid(grid);
        setOrginalGrid(grid);
        setGridHistory([grid]);
        setGameStart(true);
      });
  };

  useEffect(() => {
    let emptyBlock = grid.filter((block) => block === "0" || block === "")
      .length;
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
        console.log(combination, "no match", "ARRAY: ", arr);
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
      setGrid(gridCopy);
      let gridHistoryCopy = gridHistory;
      gridHistoryCopy.push(gridCopy);
      setGridHistory(gridHistoryCopy);
      console.log(gridHistory);
    }

    return e.target.value;
  };

  const moveFocus = (e) => {
    let focusCopy = focus;
    if (e.keyCode === 39) {
      focusCopy += 1;
    } else if (e.keyCode === 40) {
      focusCopy += 9;
    } else if (e.keyCode === 37) {
      focusCopy -= 1;
    } else if (e.keyCode === 38) {
      focusCopy -= 9;
    }

    if (focusCopy > 80 || focusCopy < 0) return;
    setFocus(focusCopy);

    if (document.getElementById(focusCopy)) {
      document.getElementById(focusCopy).focus();
    }
  };

  const handleFocus = (index) => {
    setFocus(index);
  };

  useEffect(() => {
    window.addEventListener("keydown", moveFocus);
    return () => {
      window.removeEventListener("keydown", moveFocus);
    };
  });

  const handleUndo = () => {
    let lastStep = gridHistory.length - 2;
    if (lastStep < 0) return;

    setGrid(gridHistory[lastStep]);
    let updateGridHistory = gridHistory.splice(0, gridHistory.length-1);
    setGridHistory(updateGridHistory);
  };

  return (
    <>
      <div className="app">
        <Game
          grid={grid}
          originalGrid={originalGrid}
          userInput={userInput}
          focus={focus}
          handleFocus={handleFocus}
          gameStart={gameStart}
        />
        <Menu
          newGame={newGame}
          handleDifficulty={handleDifficulty}
          timer={timer}
          fullGrid={fullGrid}
          handleSubmit={handleSumbit}
          error={error}
          undo={handleUndo}
          gameStart={gameStart}
        />
      </div>
      <Won won={won} newGame={newGame} />
    </>
  );
};

export default App;

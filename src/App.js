import React, { useState, useEffect, useRef } from "react";
import Game from "./component/Game";
import Menu from "./component/Menu";
import Won from "./component/Won";
import { Winners } from "./component/Combinations";
import NewGame from "./component/NewGame";

const App = () => {
  const [originalGrid, setOrginalGrid] = useState(Array(81).fill("0"));
  const [gridHistory, setGridHistory] = useState([]);
  const [grid, setGrid] = useState(Array(81).fill(""));
  const [difficulty, setDifficulty] = useState("easy");
  const [isPlaying, setIsPlaying] = useState(false);
  const [timer, setTimer] = useState("00:00");
  const [isFullGrid, setIsFullGrid] = useState(false);
  const [error, setError] = useState(false);
  const [focus, setFocus] = useState(null);
  const [noteModeOn, setNoteModeOn] = useState(false);
  const [showWonModal, setShowWonModal] = useState(false);
  const [showNewGameModal, setShowNewGameModal] = useState(false);
  const [highlightNum, setHighlightNum] = useState([]);
  const [helpMode, setHelpMode] = useState(false);
  const [noteArr, setNoteArr] = useState(
    Array(81)
      .fill([])
      .map((arr, i) => [i, []])
  );

  const prevFocusRef = useRef();
  const timerRef = useRef();

  useEffect(() => {
    prevFocusRef.current = focus;
  });

  // RESET GRID & STARTING STATES
  const startGame = () => {
    setShowNewGameModal(false);
    setShowWonModal(false);
    document.querySelector(".btn-start").blur();
    setIsPlaying(false);
    setNoteModeOn(false);
    setFocus(null);
    setNoteArr(
      Array(81)
        .fill([])
        .map((arr, i) => [i, []])
    );
    getNewPuzzle();
    setIsFullGrid(false);
  };

  // API CALL TO FETCH NEW SUDOKU PUZZLE
  const getNewPuzzle = () => {
    const api = `https://sugoku.herokuapp.com/board?difficulty=${difficulty}`;
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        let grid = data.board.join(",").split(",");
        setGrid(grid);
        setOrginalGrid(grid);
        setGridHistory([grid]);
        setIsPlaying(true);
      });
  };

  // CHECK IF PUZZLE IS COMPLETE
  useEffect(() => {
    let emptyBlock = grid.filter((block) => block === "0" || block === "")
      .length;
    if (emptyBlock === 0 && isPlaying) {
      setIsFullGrid(true);
    } else {
      setIsFullGrid(false);
    }
  }, [grid]);

  // CHECK IF PLAYER HAS WON
  const handleSumbit = () => {
    let noMatch = false;
    for (let arr of Winners) {
      let combination = [];
      for (let i = 0; i < 9; i++) {
        combination.push(grid[arr[i]]);
      }
      combination = combination.sort().join("");
      if (combination !== "123456789") {
        noMatch = true;
        setError(true);
      }
    }

    // IF WON - FREEZE TIMER AND SHOW WON MODAL
    if (!noMatch) {
      setError(false);
      setShowWonModal(true);
      setIsPlaying(false);
    }
  };

  // START TIMER WHEN GAME STARTS AND RESET WHEN PLAYER HAS WON
  useEffect(() => {
    if (showWonModal) {
      clearInterval(timerRef.current);
    } else if (isPlaying) {
      let seconds = 0;
      timerRef.current = setInterval(() => {
        seconds += 1;
        formatTime(seconds);
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [isPlaying, showWonModal]);

  // FORMAT TIME TO 00:00
  const formatTime = (seconds) => {
    let mins;
    let sec = 0;
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
  };

  // ADD NUMBER INPUT TO GRID
  const userInput = (e, index) => {
    const input = Number(e.target.value);
    let gridCopy = [...grid];
    if (input >= 1 || input <= 9) {
      gridCopy[index] = e.target.value;
      setGrid(gridCopy);
      let gridHistoryCopy = gridHistory;
      gridHistoryCopy.push(gridCopy);
      setGridHistory(gridHistoryCopy);
    }
    verifyNum(e.target.value);
    return e.target.value;
  };

  // CHECK IF NUMBER IS ALREADY IN ROW, COL & LOCAL BLOCK
  const verifyNum = (enteredNum) => {
    let combinations = [];
    for (let arr of Winners) {
      if (arr.includes(focus)) {
        combinations.push(arr);
      }
    }

    const duplicates = [];
    for (let arr of combinations) {
      for (let i = 0; i < 9; i++) {
        if (grid[arr[i]] === enteredNum && !duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
      }
    }
    setHighlightNum(duplicates);
  };

  // RE-CHECK VERIFYNUM FUNC WHEN HELP MODE IS TURNED ON
  useEffect(() => {
    if (helpMode) verifyNum(grid[focus]);
  }, [helpMode]);

  // EVENT LISTENERS FOR KEY PRESS
  useEffect(() => {
    window.addEventListener("keydown", handleKeypress);
    return () => {
      window.removeEventListener("keydown", handleKeypress);
    };
  });

  // CHECKS KEY IS PRESSED AND CALLS REVEVANT FUNCTION
  const handleKeypress = (e) => {
    // UP, DOWN, LEFT AND RIGHT ARROW KEYS
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      handleSetFocus(e.keyCode);
    }
    // SPACEBAR KEY (TOGGLE NOTE MODE ON/OFF)
    else if (isPlaying && e.keyCode === 32) {
      setNoteModeOn(!noteModeOn);
    }
    // 1-9 NUBMER KEYS
    else if (e.keyCode >= 49 && e.keyCode <= 57 && focus >= 0 && noteModeOn) {
      handleNote(e.keyCode);
    }
    // R KEY
    else if (e.keyCode === 82) {
      clearNotes();
    } else {
      return;
    }
  };

  // CLEAR ALL NOTES FROM ACTIVE CELL
  const clearNotes = () => {
    let noteArrayCopy = noteArr;
    noteArrayCopy[focus][1] = [];
    setNoteArr(noteArrayCopy);
  };

  // ADDS AND REMOVE NUMBER FROM NOTES ARRAY FOR THE FOCUSED BLOCK
  const handleNote = (key) => {
    let input = (key - 48).toString();
    let noteArrayCopy = noteArr;

    if (noteArrayCopy[focus][1].includes(input)) {
      noteArrayCopy[focus][1] = noteArrayCopy[focus][1]
        .join("")
        .replace(input, "")
        .split("");
    } else {
      noteArrayCopy[focus][1].push(input);
    }
    setNoteArr(noteArrayCopy);
  };

  // UPDATE FOCUS STATE WHEN UP, DOWN, LEFT AND ARROW KEYS ARE PRESSED
  const handleSetFocus = (key) => {
    let focusCopy = focus;
    if (key === 39) {
      focusCopy += 1;
    } else if (key === 40) {
      focusCopy += 9;
    } else if (key === 37) {
      focusCopy -= 1;
    } else if (key === 38) {
      focusCopy -= 9;
    }

    if (focusCopy > 80 || focusCopy < 0) return;
    setFocus(focusCopy);

    let focusElem = document.getElementById(focusCopy);

    if (
      focusElem.classList.contains("block") ||
      focusElem.classList.contains("note")
    ) {
      focusElem.focus();
    } else {
      document.getElementById(prevFocusRef.current).blur();
    }
  };

  // REFOCUS CURSOR ON CURRENT INPUT BLOCK AFTER SWITCHING OFF NOTE MODE
  useEffect(() => {
    if (noteModeOn || !focus) return;
    let focusCopy = focus;
    let focusElem = document.getElementById(focusCopy);
    setFocus(focusCopy);

    if (focusElem.classList.contains("block")) {
      focusElem.focus();
    } else {
      document.getElementById(prevFocusRef.current).blur();
    }
  }, [noteModeOn]);

  // UNDO - REVERT GRID TO LAST STATE
  const handleUndo = () => {
    let lastStep = gridHistory.length - 2;
    if (isPlaying && lastStep >= 0) {
      setGrid(gridHistory[lastStep]);
      let updateGridHistory = gridHistory.splice(0, gridHistory.length - 1);
      setGridHistory(updateGridHistory);
    }
  };

  // TOGGLE NOTE MODE ON AND OFF
  const handleNoteMode = () => {
    if (isPlaying) {
      setNoteModeOn(!noteModeOn);
    }
  };

  return (
    <>
      <div className="app">
        <Game
          grid={grid}
          originalGrid={originalGrid}
          userInput={userInput}
          focus={focus}
          handleFocus={(index) => setFocus(index)}
          noteModeOn={noteModeOn}
          noteArr={noteArr}
          highlightNum={highlightNum}
          helpMode={helpMode}
        />
        <Menu
          showModal={() => setShowNewGameModal(true)}
          handleDifficulty={(e) => setDifficulty(e.target.value)}
          timer={timer}
          isFullGrid={isFullGrid}
          handleSubmit={handleSumbit}
          error={error}
          undo={handleUndo}
          isPlaying={isPlaying}
          handleNoteMode={handleNoteMode}
          noteModeOn={noteModeOn}
          gridHistory={gridHistory}
          toggleHelpMode={() => setHelpMode(!helpMode)}
        />
      </div>
      <Won
        showWonModal={showWonModal}
        startGame={startGame}
        timer={timer}
        hideModal={() => setShowWonModal(false)}
      />
      <NewGame
        startGame={startGame}
        hideModal={() => setShowNewGameModal(false)}
        showNewGameModal={showNewGameModal}
      />
    </>
  );
};

export default React.memo(App);

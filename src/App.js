import "./styles.css";
import React, { useEffect, useState } from "react";
export default function App() {
  const [timer, setTimer] = useState(0);
  const [int, setInt] = useState();

  const startTimer = () => {
    const setIntervalVals = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    setInt(setIntervalVals);
  };

  const stopTimer = () => {
    clearInterval(int);
  };

  const resetTimer = () => {
    setTimer(0);
    clearInterval(int);
  };

  return (
    <div className="App">
      <h1>timer{timer}</h1>
      <button onClick={(e) => startTimer(e)}>Start</button>
      <button onClick={(e) => stopTimer(e)}>Stop</button>
      <button onClick={(e) => resetTimer(e)}>Reset</button>
    </div>
  );
}

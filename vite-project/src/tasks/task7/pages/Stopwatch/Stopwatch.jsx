import React, { useState } from 'react';
import css from "./Stopwatch.module.css";

export default function Stopwatch() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [lastValue, setLastValue] = useState(null);
  const [results, setResults] = useState([]);

  const time = `${hours}:${minutes}:${seconds}`;

  const startStopButton = () => {
    if(isTimerOn) {
      clearInterval(lastValue);
      setIsTimerOn(false);
      setResults((prevResults) => [...prevResults, time]);
      const orderedList = [...results, time]
      .map((item, index) => `${index + 1}. ${item}`)
      .join('\n');
      alert(`${orderedList}`);
    }
    else {
      setIsTimerOn(true);
      const timer = setInterval(() => {
        setSeconds((pSeconds) => {
          if(pSeconds < 59){
            return pSeconds += 1;
          }
          else {
            setMinutes((pMinutes) => {
              if(pMinutes < 59){
                return pMinutes += 1;
              }
              else {
                setHours((pHours) => pHours + 1);
                return 0;
              }
            })
            return 0;
          }
        })
      }, 1000)
      setLastValue(timer);
    }
  }

  const resetButton = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(lastValue);
    setIsTimerOn(false);
    setResults([]);
  }

  return (
    <div className = {css.container}>
      <p className = {css.time}>{time} </p>
      <div className = {css.buttons}>
        <button className = {css.button} onClick={startStopButton} >{isTimerOn ? 'Pause' : 'Start'}</button>
        <button className = {css.button} onClick={resetButton}>Reset</button>
      </div>
    </div>
  )
}
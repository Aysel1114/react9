import React, { useState } from 'react'
import css from "./Taymer.module.css";

export default function Taymer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [lastValue, setLastValue] = useState(null);

  const handleClickHours = (e) => {
    const value = parseInt(e.target.value);
    setHours(value + 1);
  }

  const handleClickMinutes = (e) => {
    const value = parseInt(e.target.value);
    // setMinutes(value + 1);
    if(value < 59) {
      setMinutes(value + 1);
    }
    else if (value === 59){
      setMinutes(0);
      setHours(parseInt(hours) + 1);
    }
  }

  const handleClickSeconds = (e) => {
    const value = parseInt(e.target.value);
    // setSeconds(value + 1);
    if(value < 59) {
      setSeconds(value + 1);
    }
    else if (value === 59){
      setSeconds(0);
      setMinutes(parseInt(minutes) + 1);
      if(parseInt(minutes) === 59){
        setMinutes(0);
        setHours(parseInt(hours) + 1);
      }
    }
  }

  const handleChangeHours = (e) => {
    setHours((e.target.value));
  }
  const handleChangeMinutes = (e) => {
    const value = e.target.value;
    if(value < 60) {
      setMinutes(value);
    }
  }
  const handleChangeSeconds = (e) => {
    const value = e.target.value;
    if(value < 60) {
      setSeconds(value);
    }
  }

  const startStopButton = () => {
    if(isTimerOn) {
      clearInterval(lastValue);
      setIsTimerOn(false);
    }
    else {
      setIsTimerOn(true);
      const timer = setInterval(() => {
        setSeconds((pSeconds) => {
          if(pSeconds > 0){
            return pSeconds - 1;
          }
          setMinutes((pMinutes) => {
            if(pMinutes > 0){
              setSeconds(59);
              return pMinutes - 1;
            }
            setHours((pHours) => {
              if(pHours > 0){
                setMinutes(59);
                setSeconds(59);
                return pHours - 1;
              }
              clearInterval(timer);
              alert("Finish");
              setIsTimerOn(false);
              return 0;
            })
            return 0;
          })
          return 0;
        })
      }, 1000)
      setLastValue(timer);
    }
  }

  const resetButton = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  return (
    <div className = {css.container}>
      <div className = {css.inputs}>
        <input pattern="[0-9]*" value = {hours} className = {css.input} type = "text" onChange={handleChangeHours} disabled = {isTimerOn} onClick={handleClickHours} />
        <input pattern="[0-9]*" value = {minutes} className = {css.input} type = "text" onChange={handleChangeMinutes} disabled = {isTimerOn || minutes >= 60} onClick={handleClickMinutes} />
        <input pattern="[0-9]*" value = {seconds} className = {css.input} type = "text" onChange={handleChangeSeconds} disabled = {isTimerOn || seconds >= 60} onClick={handleClickSeconds} />
      </div>
      <div className = {css.buttons}>
        <button onClick={startStopButton} className = {css.button}>{isTimerOn ? 'Pause' : 'Start'}</button>
        <button onClick={resetButton} className = {css.button}>Reset</button>
      </div>
    </div>
  )
}

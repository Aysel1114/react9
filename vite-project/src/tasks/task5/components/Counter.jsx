import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("rgb(255, 255, 0)");

    const increment = () => {
        if(count < 10) {
            setCount(count + 1);
            handleColor();
        }
    }

    const decrement = () => {
        if(count > -10) {
            setCount(count - 1);
            handleColor();
        }
    }

    const handleColor = () => {
        const randomColorRed = Math.floor(Math.random() * 255) + 0;
        const randomColorBlue = Math.floor(Math.random() * 255) + 0;
        const randomColorGreen = Math.floor(Math.random() * 255) + 0;
        const color = `rgb(${randomColorRed},${randomColorBlue},${randomColorGreen})`;  
        setColor(color);
    }

  return (
    <div className='color' style={{backgroundColor: color}}>
        <button onClick={decrement}>-</button>
        <p>{count}</p>
        <button onClick={increment}>+</button>
    </div>
  )
}

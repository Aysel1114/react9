import React, { useEffect, useState } from 'react'
import Employees from './components/Employees'

export default function AppTask2() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("");
    useEffect(() => {
        fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
        .then((res) => res.json())
        .then((info) => {
            info.map((element) => {
                if(element.id < 3) {
                    element.alive = "true";
                }
                else {
                    element.alive = "false";
                }
            })
            setData(info);
        })
    }, [])

    const render = data.filter((element) => {
        if(filter === "alive"){
            return element.alive === "true";
        }
        if(filter === "death"){
            return element.alive === "false";
        }
        return true;
    }).map((element) => {
        return <Employees key = {element.id} data = {element}/>
    })
    
  return (
    <div>
        {render}
        <button onClick={() => setFilter("alive")}>alive</button>
        <button onClick={() => setFilter("death")}>death</button>
    </div>
  )
}

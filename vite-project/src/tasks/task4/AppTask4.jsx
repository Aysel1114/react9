import { useEffect, useState } from "react";
import Workers from "./components/Workers";

export default function AppTask4() {
    const [state, setState] = useState([]);
    const [input, setInput] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [department, setDepartment] = useState("");
    useEffect(() => {
        fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setState(data);
            setFiltered(data);
        })
    }, [])

    const handleChange = (e) => {
        setInput(e.target.value);
        setDepartment("");
    }

    const handleSearch = () => {
        const filteredWorkers = state.filter((element) => {
            const searchingName = [...input].join("");
            if(element.name === searchingName){
                return element.name === searchingName;
            }
        })
        setFiltered(filteredWorkers);
    }

    const handleChanging = (e) => {
        setDepartment(e.target.value);
        setInput("");
    }

    const handleSort = () => {
        const filteredDepartment = state.filter((element) => {
            const departmentName = [...department].join("");
            if(element.department === departmentName){
                return element.department === departmentName;
            }
        })
        setFiltered(filteredDepartment);
    }

    let render;
    if (filtered.length > 0) {
        render = filtered.map((element) => (
        <Workers key={element.id} data={element} />
      ));
    } 
    else {
      render = <p>No results found</p>;
    }

  return (
    <div className = "container">
        {render}
        <div className="components">
            <input className="firstInput" value = {input} type = "text" onChange={handleChange} />
            <button onClick={handleSearch}>Search Worker</button>
            <input className="secondInput" value={department} type = "text" onChange={handleChanging} />
            <button onClick={handleSort} >Search Department</button>
        </div>
    </div>
  )
}

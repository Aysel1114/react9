import React, { useEffect, useState } from 'react'
import CreateCard from './components/CreateCard'
// import './projectStyles.css';

export default function AppProject() {

    const baseUrl = "https://acb-api.algoritmika.org/api/transaction";
    const [state, setState] = useState([]);
    const [firstInput, setFirstInput] = useState({
        from: "",
        to: "",
        amount: "",
    });
    const [editData, setEditData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        fetch(baseUrl)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            setState(data);
        })
    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFirstInput((p) => ({...p,[name]: value}));
    }

    const createCard = () => {
        const newCard = {...firstInput};
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newCard)
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            setState((prev) => [...prev, data]);
            setFirstInput({from: "", to: "", amount: ""});
            setIsOpen(true);
        })
    }

    const removeCard = (id) => {
        fetch(`${baseUrl}/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(() => {
            setState((p) => p.filter((element) => element.id !== id))
        })
    }

    const editCard = (id) => {
        const newData = {...firstInput};
        fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(response => response.json())
        .then(() => {
            setState((p) => 
                p.map((element) => element.id === id ? {...element, ...newData} : element)
            )
            setFirstInput({from: "", to: "", amount: ""});
            setEditData(null);
        })
    }

    const handleEditClick = (data) => {
        setFirstInput({from: data.from, to: data.to, amount: data.amount});
        setEditData(data.id);
    }

    const saveEdit = () => {
        if(editData) {
            editCard(editData);
        }
        else {
            createCard();
        }
    }

    const render = state.map((element) => {
        return <CreateCard key = {element.id} data = {element} removeCard = {removeCard} editCard={handleEditClick} />
    })

    const toggle = () => {
        setIsOpen((prev) => !prev);
    };


  return (
    <div className = 'mainContainer'>
        <div className = "wrapper">
            <label>
                From:
                <input value={firstInput.from} className = "from" name = "from" type = "text" onChange={handleChange} />
            </label>
            <label>
                To:
                <input value={firstInput.to} className = "to" name = "to" type = "text" onChange={handleChange}/>
            </label>
            <label>
                Amount:
                <input value={firstInput.amount} className = "amount" name = "amount" type = "text" onChange={handleChange}/>
            </label>
            <button onClick={saveEdit} className = "add">
                {editData ? "Update" : "Add"}
            </button>
            <button onClick={toggle} className="add">
                {isOpen ? 'Close Data' : 'View Data'}
            </button>
            </div>

      <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
          <div className="container">
            {render}
          </div>
      </div>
    </div>
  )
}

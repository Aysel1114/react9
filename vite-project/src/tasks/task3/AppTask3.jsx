import React, { useState } from 'react'
import Form from './components/Form'
// import './style.css'

export default function AppTask3() {
    const [state, setState] = useState({
        cards: [
            { number: "7653 7553 5693 9862", balance: 100 },
            { number: "7453 9736 0763 3474", balance: 400 },
            { number: "9577 7543 9379 9784", balance: 800 },
        ]
    });


    const handleCloseCard = (idx) => {
        setState((prev) => ({...prev,cards: prev.cards.filter((item, index) => index !== idx)}))
    };
    
    const handleOpenCard = (card) => {
        setState((prev) => ({cards: [...prev.cards, card]}));
        console.log(card);
    }
    
  return (
    <div>
        <div className="app">
        <Form handleOpenCard={handleOpenCard} />
        {state.cards.map(({ number, balance }, idx) => (
          <div key={number} className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                Карта <br />
                {number}
              </h5>
              <div className="card-text">
                <ul className="list-group">
                  <li className="list-group-item">Баланс: {balance}</li>
                  <hr />
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleCloseCard(idx)}
                  >
                    Закрыть карту
                  </button>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

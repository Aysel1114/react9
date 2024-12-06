import React from 'react';

export default function CreateCard({data, removeCard, editCard}) {
  return (
    <div className='mainDiv'>
        <div className='card'>
            <p>{data.from}</p>
            <p>{data.to}</p>
            <p>{data.amount}</p>  
            <p>{data.id}</p>
            <div className='editDiv'>
                <button onClick={() => editCard(data)} className='edit edit1'>🖉</button>
                <button onClick={() => removeCard(data.id)} className='edit edit2'>🗑️</button>
            </div>
        </div>
    </div> 
  )
}

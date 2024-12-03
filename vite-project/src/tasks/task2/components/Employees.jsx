import React from 'react'

export default function Employees({data}) {
    
  return (
    <div>
        <p>name: {data.name}</p>
        <p>department: {data.department}</p>
        <p>role: {data.role}</p>
        <p>alive: {data.alive}</p>
    </div>
  )
}

import React, { useEffect, useState } from 'react'

export default function Workers({data}) {
    
  return (
    <div>
        <p>{`${data.id}. ${data.name}`} </p>
        <p>department: {data.department} </p>
        <p>role: {data.role} </p>
    </div>
  )
}

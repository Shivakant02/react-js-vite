// import React from 'react'

import { useState } from "react"

function Map() {
    const [todo,setTodo]=useState(['Todo1','Todo2','todo3','Todo4'])
  return (
      <div>
          <h1>todo list</h1>
          {todo.map((values) => <li key={Date.now}>{values}</li>)}
          <button onClick={()=>setTodo([...todo,'todo5'])}>click</button>
    </div>
  )
}

export default Map
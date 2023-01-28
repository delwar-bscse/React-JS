import React, { useState } from 'react'
import Message from './Message';

const ChildApp = () => {
    const [count, setCount] =useState(0);
    console.log("app rendering");

  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <Message sendMsg={count}/>
    </div>
  )
}

export default ChildApp;

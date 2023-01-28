import React, { useCallback, useState } from 'react'
import Message from './Message';

const ChildApp = () => {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);
    console.log("app rendering");

    const handleIncrement = useCallback(() =>{
      setCount(count+1);
    },[count])

  return (
    <div>
        <span>{toggle ? "On" : "Off"}</span>
        <button onClick={()=>setToggle(!toggle)}> Toggle</button>

        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>

        <Message sendMsg={count} onIncrement={handleIncrement}/>
    </div>
  )
}

export default ChildApp;

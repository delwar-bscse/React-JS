import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        console.log("UseEffect");
    },[count]);
    
  return (
    <div>
      <h1>Use Effect</h1>
      <div>
        {console.log('Rendering')}
        <h3>Count : {count}</h3>
        <button onClick={()=>setCount(count+1)}>+</button>
      </div>
      <div>
        <p>{isLoading && "Here has no effect of useEffect Hook"}</p>
        <button onClick={()=>setIsLoading(!isLoading)}>IsLoading</button>
      </div>
    </div>
  )
};

export default UseEffect;

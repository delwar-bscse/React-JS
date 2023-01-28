import React, { memo, useMemo } from 'react'

const Message = ({sendMsg, onIncrement}) => {
    console.log("message rendering");

    const calculatedNumber = useMemo(()=>{
      let number = 0;
      for(let i=1; i<=600000000; i++){
        number++;
      };
      return number;
    },[])

  return (
    <div>
      <h2>{calculatedNumber}</h2>
      <p>Send {sendMsg} message</p>
      <button onClick={onIncrement}>Increment Number</button>
    </div>
  )
};

export default memo(Message);

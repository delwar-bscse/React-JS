import React, { memo } from 'react'

const Message = ({sendMsg, onIncrement}) => {
    console.log("message rendering");
  return (
    <div>
      <p>Send {sendMsg} messages</p>
      <button onClick={onIncrement}>Increment Number</button>
    </div>
  )
};

export default memo(Message);

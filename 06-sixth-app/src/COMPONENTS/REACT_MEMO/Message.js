import React, { memo } from 'react'

const Message = ({sendMsg}) => {
    console.log("message rendering");
  return (
    <div>
      <p>Send {sendMsg} message</p>
    </div>
  )
};

export default memo(Message);

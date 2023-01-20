import React, {useState} from 'react'

const Toggle = () => {
    const [toggle, setToggle] = useState(true);
  return (
    <div>
      <button onClick={()=>setToggle(!toggle)}>{toggle ? "Hide":"Show"}</button>
      <p>Toggle : {toggle && "I am toggle"}</p>
    </div>
  )
};

export default Toggle;

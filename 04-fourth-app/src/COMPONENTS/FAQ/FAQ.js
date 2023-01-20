import React, { useState } from 'react'

const FAQ = ({id,title,des}) => {
    const [toggle, setToggle] = useState(false);
    return (
    <div>
        <div>
        <h3>{title}</h3>
        {toggle && <p>{des}</p>}
        <button onClick={()=>setToggle(!toggle)}>{toggle?"-":"+"}</button>
        </div>
    </div>
  )
};

export default FAQ;

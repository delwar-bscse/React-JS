import React, { useState } from 'react';

function AssignmentFunction(){
    const [count, setCount] = useState(0);
    const handleIncrese=()=>{
        setCount(count+1);
    };
    const handleReset=()=>{
        setCount(0);
    };
    const handleDecrese=()=>{
        setCount(count-1);
    };

    return <div className='counter'>
        <h1 className='title'>Assignment by Functional Component</h1>
        <h2 className='count'>Counter : {count}</h2>
        <div className='btn_div'>
            <button className='btn' onClick={handleIncrese} disabled={count>=5?true:false}>+</button>
            <button className='btn' onClick={handleReset}>0</button>
            <button className='btn' onClick={handleDecrese} disabled={count<=0?true:false}>-</button>
        </div>
    </div>
}

export default AssignmentFunction;
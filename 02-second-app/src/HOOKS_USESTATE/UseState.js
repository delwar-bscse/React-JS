import React, {useState} from 'react';

function UseState(){

    const [count, setCount] = useState(0);

    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleDecrement=()=>{
        setCount(count-1);
    }

    return <div className='counter'>
        <h1 className='count'>Count : {count}</h1>
        <div className='btn_div'>
            <button className='btn' onClick={handleIncrement} disabled={count>=5?true:false}>+</button>
            <button className='btn' onClick={handleDecrement} disabled={count<=0?true:false}>-</button>
        </div>
    </div>
};

export default UseState;
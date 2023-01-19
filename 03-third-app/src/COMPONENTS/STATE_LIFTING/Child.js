import React from 'react';

const Child =(props)=>{

    const text = "Get data from Child Component";

    props.onChildData(text);

    return <div>
        <h1>Child Component</h1>
    </div>
};

export default Child;
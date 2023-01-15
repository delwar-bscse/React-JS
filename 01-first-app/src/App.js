import React from 'react';
import Card from './components/Card';
import Data from './data.json';
import {v4 as uuidv4} from 'uuid';

function App(){
    return <div>
        <h1 className='todoHeading'>Todo App</h1>
        {Data.map((item)=> <Card key={uuidv4()} id={uuidv4()} cardTitle={item.title} cardDes={item.des} />)}
    </div>
}

export default App;
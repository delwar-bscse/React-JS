import React from 'react';
import Card from './components/Card';
import Data from './data.json';

function App(){
    let items = [];
    for(let x=0; x<Data.length; x++){
        items.push(<Card cardTitle={Data[x].title} cardDes={Data[x].des}/>);
    }
    return <div>
        <h1 className='todoHeading'>Todo App</h1>
        {items}
    </div>
}

export default App;
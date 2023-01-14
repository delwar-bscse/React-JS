import React from 'react';
import Card from './components/Card.js';

function App(){
    return  <div>
                <h1 className='headingStyle'>Todo App</h1>
                <Card todoTitle = "Father" todoDes = "Lorem Ipsum is simply dummy text 01"/>
                <Card todoTitle = "Mother" todoDes = "Lorem Ipsum is simply dummy text 02"/>
                <Card todoTitle = "Wife" todoDes = "Lorem Ipsum is simply dummy text 03"/>
            </div>
}

export default App;
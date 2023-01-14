import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <h1 className='headingStyle'>Todo App</h1>
      <Card />
      <Card />
      <Card />
    </div>
);

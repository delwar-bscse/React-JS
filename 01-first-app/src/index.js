import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';

const date = new Date();
const getDay = date.getDate();
const getMonth = date.getMonth();
const getYear = date.getFullYear();

const todoTitle = "Call Family"
const todoDes = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

function Card() {
  return  <div className='card'>
            <h3 className='cardTitle'>{todoTitle}</h3>
            <p className='todoDes'>{todoDes}</p>
            <p className='todoFooter'>{getDay+"/"+getMonth+"/"+getYear}</p>
          </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <h1 className='headingStyle'>Todo App</h1>
      <Card />
      <Card />
      <Card />
    </div>
);

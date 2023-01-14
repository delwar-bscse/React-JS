import React from 'react';
import ReactDOM from 'react-dom/client';

const date = new Date();
const getDay = date.getDate();
const getMonth = date.getMonth();
const getYear = date.getFullYear();

const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <h1>Lorem Ipsum</h1>
      <h2>{getDay+"/"+getMonth+"/"+getYear}</h2>
      <p>{loremIpsum}</p>
    </div>
);

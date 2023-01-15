import React from 'react';

const date = new Date();
const getDay = date.getDate();
const getMonth = date.getMonth();
const getYear = date.getFullYear();


function Card(props){
  const {id, cardTitle, cardDes} = props;
  return <div className='Card'>
    <h3 className='cardTitle'>{cardTitle}</h3>
    <p>{"UUID : "+id}</p>
    <p className='cardDes'>{cardDes}</p>
    <p className='cardTime'>{getDay+"/"+getMonth+"/"+getYear}</p>
  </div>
}

export default Card;
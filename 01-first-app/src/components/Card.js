import React from 'react';

const date = new Date();
const getDay = date.getDate();
const getMonth = date.getMonth();
const getYear = date.getFullYear();


function Card(props){

  const {id, cardTitle, cardDes, cardNumber} = props;

  const nums = cardNumber.map((num, index)=>{
    const {homeNum, officeNum} = num;
    return <div key={index}>
      <p>Home : {homeNum}</p>
      <p>Office : {officeNum}</p>
    </div>
  })
  
  return <div className='Card'>
    <h3 className='cardTitle'>{cardTitle}</h3>
    <p>{"UUID : "+id}</p>
    <p className='cardDes'><b>Description : </b>{cardDes}</p>
    {nums}
    <p className='cardTime'>{getDay+"/"+getMonth+"/"+getYear}</p>
  </div>
}

export default Card;
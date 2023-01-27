import React from 'react'
import { useParams } from 'react-router-dom';

const User1 = () => {
  const {name, age} = useParams();
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>Age : {age}</h1>
    </div>
  )
};

export default User1;

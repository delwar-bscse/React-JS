import React, { useContext } from 'react'
import { UserContext } from './UserContext';

const ComponentD = () => {
    const {user, text} = useContext(UserContext);
  return (
    <div>
        <h1>Component D</h1>
        <p>ID : {user.id} & Name : {user.name}</p>
        <p>{text}</p>
    </div>
  )
};

export default ComponentD;
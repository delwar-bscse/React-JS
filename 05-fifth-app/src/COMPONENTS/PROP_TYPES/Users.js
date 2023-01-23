import React from 'react'
import User from './User';

const Users = () => {

  const userName = {name:"Delwar"};
  const age= 25;
  
  return (
    <div>
      <User userName={userName} age={age}/>
    </div>
  )
};

export default Users;

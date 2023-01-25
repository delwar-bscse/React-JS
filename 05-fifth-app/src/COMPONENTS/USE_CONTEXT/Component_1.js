import React, { useState } from 'react'
import ComponentB from './Component_2';
import { UserContext } from './UserContext';

const ComponentA = () => {
    const [user, setUser] = useState({id:"01", name:"M D Hossain"});
    const [text, setText] = useState("I am common text")
  return (
    <UserContext.Provider value={{user, text}}>
      <ComponentB />
    </UserContext.Provider>
  )
};

export default ComponentA;

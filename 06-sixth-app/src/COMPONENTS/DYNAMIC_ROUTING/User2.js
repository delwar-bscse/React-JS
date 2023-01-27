import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const User2 = () => {
    const [user, setUser] = useSearchParams();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit =(event)=>{
        event.preventDefault();
        setUser({name:name, age:age});
    };

  return (
    <div>
        <h1>User 02</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value)} />
            <button type='submit'>Search</button>
        </form>
        <h2>Display Details</h2>
        <p>Name : {user.get("name")}</p>
        <p>Age : {user.get("age")}</p>
    </div>
  )
};

export default User2;

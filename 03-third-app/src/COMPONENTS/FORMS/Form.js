import React, { useState } from 'react';
import './style.css';

function Form(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleName=(e)=>{
        setName(e.target.value)
    };
    const emailChange=(e)=>{
        setEmail(e.target.value) 
    };
    const passwordChange=(e)=>{
        setPassword(e.target.value) 
    };
    const handleButton=(e)=>{
        e.preventDefault();
        console.log('Form is submitted');
        let userInfo = {
            name, email, password
        }
        console.log(userInfo);
    };

    return <div>
        <h1>Registration</h1>
        <form action="" onSubmit={handleButton}>
            <div className='formDiv'>
                <label htmlFor="name">Name : </label>
                <input type="text" name="name" id="name" onChange={handleName} value={name} required/>
            </div>
            <div className='formDiv'>
                <label htmlFor="email">Email : </label>
                <input type="email" name="email" id="email" onChange={emailChange} value={email} required/>
            </div>
            <div className='formDiv'>
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" id="password" onChange={passwordChange} value={password} required/>
            </div>
            <div className='formDiv'>
                <button type="submit" id="button">Register</button>
            </div>
        </form>
    </div>
};

export default Form;
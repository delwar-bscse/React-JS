import React, { useState } from 'react';
import './style.css';

function Form(){

    const [user, setUser] = useState({name : '', email : '', password : ''});
    const {name,email,password} = user;

    const inputHandler=(e)=>{
        /*
            const fildName = e.target.name;
            if(fildName==='name'){
                setUser({name : e.target.value, email, password});
            }else if(fildName==='email'){
                setUser({name, email : e.target.value, password});
            }else{
                setUser({name, email, password : e.target.value});
            };
        */       
        setUser({...user, [e.target.name] : e.target.value});
    }

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
                <input type="text" name="name" id="name" onChange={inputHandler} value={name} required/>
            </div>
            <div className='formDiv'>
                <label htmlFor="email">Email : </label>
                <input type="email" name="email" id="email" onChange={inputHandler} value={email} required/>
            </div>
            <div className='formDiv'>
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" id="password" onChange={inputHandler} value={password} required/>
            </div>
            <div className='formDiv'>
                <button type="submit" id="button">Register</button>
            </div>
        </form>
    </div>
};

export default Form;
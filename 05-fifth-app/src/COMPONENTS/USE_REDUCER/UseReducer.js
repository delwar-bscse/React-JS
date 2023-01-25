import React, { useState, useReducer } from 'react'

import {reducer} from './Reducer';

// const booksList = [
//     {id:"01",name:"English"},
//     {id:"02",name:"Bangla"},
//     {id:"03",name:"Mathematic"}
// ];

const UseReducer = () => {

    const [newBooks, setNewBooks] = useState("");

    const [bookState, dispatch] = useReducer(reducer, {
        books:[],
        modelText:"",
        isModelText:false
    });

    const handleSubmit =(event)=>{
        event.preventDefault();
        const modifyBooks = {id:new Date().getTime().toString(), name:newBooks};
        dispatch({type:"ADD", payload: modifyBooks});
        setNewBooks("");

    }

    const handleClick =(id)=>{
        dispatch({type:"REMOVE", payload:id});
    }
    
  return (
    <div>
      <h1>Books List</h1>

      <form onSubmit={handleSubmit}>
        <label>Book Name : </label>
        <input type="text" value={newBooks} onChange={(e)=>setNewBooks(e.target.value)}/>
        <button type='submit'>Add</button>
      </form>

      {bookState.isModelText && <span>Notice : {bookState.modelText}</span>}

      <ul>{bookState.books.map((book)=>{
        const {id,name} = book;
        return <li key={id}>{id} : {name} <button onClick={()=>handleClick(id)}> Remove</button></li>
      })}</ul>
    </div>
  )
};

export default UseReducer;

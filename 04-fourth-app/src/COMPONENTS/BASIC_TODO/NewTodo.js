import React, { useState } from 'react'

const NewTodo = (props) => {
    const [todo, setTodo] = useState("");
    
    const handleTodo = (event) => {
        setTodo(event.target.value);
    };

    const {onCreateTodo} = props;
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreateTodo(todo);
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'>New Todo </label>
            <input type="text" name="todo" value={todo} onChange={handleTodo}/>
            <button type="submit">Add Todo</button>
        </form>
    </div>
  )
};

export default NewTodo;

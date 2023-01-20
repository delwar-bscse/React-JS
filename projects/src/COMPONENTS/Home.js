import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid';
import NewTodo from './NewTodo';
import Todos from './Todos';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const handleNewTodo = (newTodo)=>{
        setTodos([...todos, {id:uuidv4(), ...newTodo}]);
    }
    const handleRemoveTodo = (id)=>{
        setTodos(todos.filter((todo)=>todo.id !== id));
    };

  return (
    <div>
        <div><NewTodo onNewTodo={handleNewTodo}/></div>
        <div><Todos todos={todos} onHandleRemoveTodo={handleRemoveTodo}/></div>
    </div>
  )
};

export default Home;

import React, { useState } from 'react'
import NewTodo from './NewTodo';
import Todos from './Todos';

const dummyTodos = ["todo1","todo2"];

const Home = () => {
    const [todos, setTodos] = useState(dummyTodos);

    const createTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    }

  return (
    <div>
      <NewTodo onCreateTodo={createTodo}/>
      <Todos todos={todos}/>
    </div>
  )
};

export default Home;

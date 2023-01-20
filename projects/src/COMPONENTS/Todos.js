import React from 'react'
import Todo from './Todo';

const Todos = (props) => {
    const {todos, onHandleRemoveTodo} = props;
  return (
    <div className='todos'>
      {todos.map((todo,index)=><Todo key={index} todo={todo} onHandleRemoveTodo={onHandleRemoveTodo}/>)}
    </div>
  )
};

export default Todos;

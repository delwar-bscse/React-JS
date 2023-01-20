import React from 'react'
import { FaTrash } from 'react-icons/fa';

const Todo = (props) => {
    const {todo, onHandleRemoveTodo} = props;
    const {id, title, des} = todo;

    const handleClick = (id)=>{
        onHandleRemoveTodo(id);
    }
  return (
    <div className="todo">
      <div className='todo_title'>
        <h2>{title}</h2>
        <p>{des}</p>
      </div>
      <button className='todo_btn' onClick={()=>handleClick(id)}><FaTrash /></button>
    </div>
  )
};

export default Todo;

import React, {useState} from 'react'

const NewTodo = (props) => {
    const {onNewTodo} = props;
    const [todo, SetTodo] = useState({title:"",des:""});
    const {title,des} = todo;

    const handleChange = (e)=>{
        SetTodo({...todo, [e.target.name]:e.target.value});
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        onNewTodo(todo);
        // SetTodo({title:"",des:""});
    }

  return (
    <div className='new_todo'>
      <h1>Todo App</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
            <label htmlFor='title'>Title : </label>
            <input type="text" name="title" onChange={handleChange} value={title}  required/>
        </div>
        <div>
            <label htmlFor='des'>Des : </label>
            <input type="text" name="des" onChange={handleChange} value={des} required/>
        </div>
        <button type='submit'>Add Todo</button>
    </form>
    </div>
  )
};

export default NewTodo;

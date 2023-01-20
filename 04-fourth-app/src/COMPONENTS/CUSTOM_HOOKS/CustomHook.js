import React from 'react'
import useFetch from './useFetch';

const CustomHooks = () => {
    
  const {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");
     
  return (
    <div>
      <h1>Custom Hooks</h1>
      {isLoading && <p>Todos are loading...</p>}
      {data && data.map((todo)=><p key={todo.id}>{todo.id} : {todo.title}</p>)}
      {error && <p><b>Opps!!!</b> {error}</p>}
    </div>
  )
};

export default CustomHooks;

































// import React, { useEffect, useState } from 'react'

// const DataFetch = () => {
//     const [todos, setTodos] = useState(null);
//     useEffect(()=>{
//         fetch("https://jsonplaceholder.typicode.com/todos")
//             .then((res)=>res.json())
//             .then((datas)=>{
//                 setTodos(datas);
//                 console.log(todos);
//             })
        
//     },[]);
    
//   return (
//     <div>
//       <h1>Data fetch by useEffect</h1>
//       {todos && todos.map((todo)=>{
//         return <p key={todo.id}>{todo.title}</p>
//       })}
//     </div>
//   )
// };

// export default DataFetch;
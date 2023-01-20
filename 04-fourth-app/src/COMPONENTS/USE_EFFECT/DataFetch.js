import React, { useEffect, useState } from 'react'

const DataFetch = () => {
    const [todos, setTodos] = useState(null);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res)=>res.json())
            .then((datas)=>setTodos(datas))
    },[]);
    
  return (
    <div>
      <h1>Data Fetch</h1>
      {todos && todos.map((todo)=><p key={todo.id}>{todo.title}</p>)}
    </div>
  )
};

export default DataFetch;

































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
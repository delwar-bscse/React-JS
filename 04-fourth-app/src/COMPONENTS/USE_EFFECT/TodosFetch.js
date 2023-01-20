import React, { useEffect, useState } from 'react'

const TodosFetch = () => {
    const [todos, setTodos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
      //setTimeout use only to check isLoading;
        setTimeout(()=>{
          fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res)=>{
              if(!res.ok){
                throw Error("Fatching is not successful");
              }else{
                return res.json()
              }
            })
            .then((datas)=>{
              setTodos(datas);
              setIsLoading(false);
              setError(null);
            })
            .catch((error)=>{
              setError(error.message);
              setIsLoading(false);
            });
        },2000);
    },[]);
    
  return (
    <div>
      <h1>Todos Fetch</h1>
      {isLoading && <p>Todos are loading...</p>}
      {todos && todos.map((todo)=><p key={todo.id}>{todo.id} : {todo.title}</p>)}
      {error && <p><b>Opps!!!</b> {error}</p>}
    </div>
  )
};

export default TodosFetch;

































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
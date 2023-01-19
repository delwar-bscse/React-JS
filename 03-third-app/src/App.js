import React from 'react';
import Child from './COMPONENTS/STATE_LIFTING/Child';

function App(){
  
  const childData=(data)=>{
    console.log(data);
  };

  return <div>
    <Child onChildData={childData}/>
  </div>
}

export default App;
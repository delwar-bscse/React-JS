import React from 'react';
import Card1 from './components/Card1';
import Card2 from './components/Card2';

function App(){
  return <div>
    <Card1 title="Card1" des="Functional Component"/>
    <Card2 title="Card2" des="Class Component"/>
  </div>
};

export default App;
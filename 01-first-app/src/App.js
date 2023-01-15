import React from 'react';
import Card from './components/Card';
import Datas from './data.json';
import {v4 as uuidv4} from 'uuid';

function App(){

    const datas = Datas.map((data)=>{
        const {name, age, languages} = data;
        return <Card key={uuidv4()} id={uuidv4()} name={name} age={age} languages={languages}/>
    });

    return <div className='li_div'>
        <h1 className='li_header'>English Language Institute</h1>
        <div className='li_cards'>{datas}</div>
    </div>
};

export default App;
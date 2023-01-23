import React, { useEffect, useState } from 'react'
import "./App.css";

const Home = () => {

  const [name, setName] = useState("");
  const [tagStyle, setTagStyle] = useState(null);

  useEffect(()=>{
    setTagStyle(name.length);
  },[name]);

  const activeSwitch =(value)=>{
    if(value<=5){
      return "tagStyle_01";
    }else if(value<=10){
      return "tagStyle_02";
    }else{
      return "tagStyle_03";
    };
  };
  

  return (
    <div className='card'>
      <input type="text" onChange={(e)=>setName(e.target.value)} className={activeSwitch(tagStyle)}/>
    </div>
  )
};

export default Home;

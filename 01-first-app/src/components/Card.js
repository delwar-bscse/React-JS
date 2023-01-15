import React from 'react';

function Card(props){
    const {id, name, age, languages} = props;

    const lang_level = languages.map((lang)=>{
        const {language,level_01,level_02,level_03} = lang;
        return <div className='lang'>
            <h4>Language : {language}</h4>
            <p>level_01 : {level_01}</p>
            <p>level_02 : {level_02}</p>
            <p>level_03 : {level_03}</p>
        </div>
    });

    return <div className='li_card'>
        <h3>ID : {id}</h3>
        <h3>Name : {name}</h3>
        <p>Age : {age}</p>
        {lang_level}
        <button className='btn'>Click Me</button>
    </div>
}

export default Card;
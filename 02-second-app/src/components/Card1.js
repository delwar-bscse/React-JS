import React from 'react';

function Card1(props){
    const {title,des} = props;
    return <div>
        <h2>{title}</h2>
        <p>{des}</p>
    </div>
}

export default Card1;
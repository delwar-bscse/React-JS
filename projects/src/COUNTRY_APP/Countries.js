import React from 'react'
import Country from './Country';

const Countries = (props) => {
    const {countries, onRemove} = props;
  return (
    <div>
        {countries.map((country, index)=><Country key={index} country={country} onRemove={onRemove}/>)}
    </div>
  )
};

export default Countries;

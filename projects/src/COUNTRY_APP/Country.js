import React from 'react'

const Country = (props) => {
  const {country, onRemove} = props;
  const {flags,name,capital,area,population} = country;
  return (
    <div>
      <img src={flags.png} alt={name.common}/>
      <h1>Name : {name.common}</h1>
      <h2>Capital : {capital}</h2>
      <p>Area : {area}</p>
      <p>Population : {population}</p>
      <button onClick={()=>onRemove(name.common)}>Remove</button>
    </div>
  )
}

export default Country;

import React, { useEffect, useState } from 'react'

const SearchCountry = (props) => {
  const {onChange} = props;

  const [searchCountry, setSearchCountry] = useState("");
  
  const handleText=(e)=>{
    setSearchCountry(e.target.value)
  };

  useEffect(()=>{
    onChange(searchCountry);
  },[searchCountry]);



  return (
    <div>
      <input type="text" placeholder="Search Country" onChange={handleText} value={searchCountry}/>
    </div>
  )
};

export default SearchCountry;

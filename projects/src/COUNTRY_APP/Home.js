import React, { useEffect, useState } from 'react'
import Countries from './Countries';
import SearchCountry from './SearchCountry';

const url = "https://restcountries.com/v3.1/all";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [copyCountries, setCopyCuntries] = useState(countries);

  const dataFetch = async(url)=>{
    try{
      const res = await fetch(url);
      const data = await res.json();
      setCountries(data);
      setCopyCuntries(data);
      setIsLoading(false);
      setError(null);
    }catch(error){
      setIsLoading(false);
      setError(error);
    }
  }
  
  useEffect(()=>{
    dataFetch(url);
  },[]);

  const handleRemove =(name)=>{
    setCountries(copyCountries.filter((country)=>country.name.common !== name));
    setCopyCuntries(copyCountries.filter((country)=>country.name.common !== name));
  }

  const handleChange=(name)=>{
    setCopyCuntries(countries.filter((country)=>{
        return country.name.common.toLowerCase().startsWith(name.toLowerCase());
      })
    );
  };

  return (
    <div>
      <h1>Country App</h1>
      <SearchCountry onChange={handleChange}/>
      <div>
        {isLoading && <p>Data is loadding....</p>}
        {error && <p>Error : {error.message}</p>}
        {copyCountries && <Countries countries={copyCountries} onRemove={handleRemove}/>}
      </div>
    </div>
  )
};

export default Home;

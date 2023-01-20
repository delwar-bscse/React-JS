import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(url)
            .then((res)=>{
                if(!res.ok){
                throw Error("Fatching is not successful");
                }else{
                return res.json()
                }
            })
            .then((datas)=>{
                setData(datas);
                setIsLoading(false);
                setError(null);
            })
            .catch((error)=>{
                setError(error.message);
                setIsLoading(false);
            });
    },[url]);

    return {data, isLoading, error};
};

export default useFetch

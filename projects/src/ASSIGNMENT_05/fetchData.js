import { useEffect, useState } from 'react'

const useData = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    let [users, setUsers] = useState([]);

    const fetchUsers = async(url)=>{
        try{
            const res = await fetch(url);
            const allUsers = await res.json();
            setIsLoading(false);
            setError(null);
            setUsers(allUsers);
        }catch(error){
            setIsLoading(false)
            setError(error);
        };
    };

    useEffect(()=>{
        fetchUsers(url);
    },[])

  return {isLoading, error, users};
};

export default useData;

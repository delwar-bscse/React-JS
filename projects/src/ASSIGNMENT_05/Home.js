import React, { useEffect, useState } from 'react'
import useData from './fetchData';
import SearchUser from './SearchUser';
import Users from './Users';

const url = "https://jsonplaceholder.typicode.com/users";

const Home = () => {
    const {isLoading, error, users} = useData(url);
    const [copyUsers, setCopyUsers] = useState([]);

    useEffect(()=>{
      setCopyUsers(users.map((user)=>user));
    },[users])

const removeUser =(id)=>{
  setCopyUsers(copyUsers.filter((user)=>user.id !== id));
};

const filterUsers = (name)=>{

  // console.log(copyUsers.filter((user)=>{
  //   return user.name.toLowerCase().startsWith(name.toLowerCase());
  // }));

  setCopyUsers(users.filter((user)=>{
    return user.name.toLowerCase().startsWith(name.toLowerCase());
  }));
};

  return (
    <div>
        <h1>Users Profile</h1>
        {isLoading && <p>Users are loadding...</p>}
        {error && <p>Error : {error.message}</p>}
        {users  && <SearchUser onFilter={filterUsers}/>}
        {users &&  <Users users={copyUsers} onRemove={removeUser}/>}
    </div>
  )
};

export default Home;

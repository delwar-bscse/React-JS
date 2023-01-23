import React, { useEffect, useState } from 'react'

const SearchUser = (props) => {
  const [findUsers, setFindUsers] = useState("");

  useEffect(()=>{
    props.onFilter(findUsers);
  },[findUsers]);

  return (
    <div>
      <input type="text" placeholder='Search User' onChange={(e)=>setFindUsers(e.target.value)}/>
    </div>
  )
}

export default SearchUser;

import React from 'react'
import User from './User';

const Users = (props) => {
    const {users, onRemove} = props;
  return (
    <div>
      {users.map((user)=><User key={user.id} user={user} onRemove={onRemove}/>)}
    </div>
  )
};

export default Users;

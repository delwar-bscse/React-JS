import React from 'react'

const User = (props) => {
    const {user, onRemove} = props;
    const {id, name, phone, email, address} = user;
    const {street, city} = address;

    const handleClick = (id)=>{
        onRemove(id);
    }

  return (
    <div>
      <p><b>Id : </b>{id}</p>
      <p><b>Name : </b>{name}</p>
      <p><b>Phone : </b>{phone}</p>
      <p><b>Email : </b>{email}</p>
      <address><b>Address : </b>{street},{city}</address>
      <button onClick={()=>handleClick(id)}>Remove User</button>
    </div>
  )
};

export default User;

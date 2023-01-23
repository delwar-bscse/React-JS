import React from 'react'
import PropTypes from 'prop-types';

const User = (props) => {
  const {userName, age} = props;
  const {name} = userName;
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>Age : {age}</h1>
    </div>
  )
};

User.propTypes = {
  userName: PropTypes.shape({
    name: PropTypes.string
  }),
  age: PropTypes.number
};

export default User;
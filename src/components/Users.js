import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Users = ({ users, loading }) => (
  <ul>
    {loading ? 'Loading...' : ''}
    {users.map(user => (
      <User key={user.id.value || Math.random()} {...user} />
    ))}
  </ul>
);

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired
    })
  )
};

export default Users;

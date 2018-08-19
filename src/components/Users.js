import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Users = ({ users, loading }) => (
  <div className="users-container row">
    {loading ? 'Loading...' : ''}
    {users.map(user => (
      <User key={user.id.value || Math.random()} {...user} />
    ))}
  </div>
);

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      picture: PropTypes.shape({
        large: PropTypes.string.isRequired,
        medium: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired
      }).isRequired,
      name: PropTypes.shape({
        first: PropTypes.string.isRequired,
        last: PropTypes.string.isRequired
      }).isRequired,
      location: PropTypes.shape({
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        postcode: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired
      }).isRequired,
      cell: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    })
  )
};

export default Users;

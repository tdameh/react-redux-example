import React from 'react';
import PropTypes from 'prop-types';

const User = ({ email, gender }) => (
  <li>
    {email}, {gender}
  </li>
);

User.propTypes = {
  email: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired
};

export default User;

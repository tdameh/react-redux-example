import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

let input;
const sortByOptions = [
  { value: 'email', label: 'Email' },
  { value: 'gender', label: 'Gender' }
];

const Header = ({ sortUsers, filterUsers }) => (
  <div>
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          filterUsers(input.value);
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Search</button>
      </form>
    </div>
    <div>
      <Select options={sortByOptions} onChange={e => sortUsers(e.value)} />
    </div>
  </div>
);

Header.propTypes = {
  sortUsers: PropTypes.func.isRequired,
  filterUsers: PropTypes.func.isRequired
};

export default Header;

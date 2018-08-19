import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

let input;
const sortByOptions = [
  { value: 'name.first', label: 'First Name' },
  { value: 'name.last', label: 'Last Name' },
  { value: 'location.street', label: 'Street' },
  { value: 'location.city', label: 'City' },
  { value: 'email', label: 'Email' }
];

const Header = ({ sortUsers, filterUsers }) => (
  <div className="row justify-content-center">
    <div className="form-group col-4">
      <form
        onSubmit={e => {
          e.preventDefault();
          filterUsers(input.value);
        }}
      >
        Search: <input ref={node => (input = node)} className="form-control" />
      </form>
    </div>
    <div className="form-group col-4">
      Sort By:{' '}
      <Select options={sortByOptions} onChange={e => sortUsers(e.value)} />
    </div>
  </div>
);

Header.propTypes = {
  sortUsers: PropTypes.func.isRequired,
  filterUsers: PropTypes.func.isRequired
};

export default Header;

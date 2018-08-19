import React from 'react';
import Img from 'react-image';

const User = ({ picture, name, location, cell, email }) => (
  <div className="user col-sm-12 col-md-6 ">
    <div className="row">
      <div className="col-sm-12 col-md-2">
        <Img src={picture.medium} />
      </div>
      <div className="col-sm-12 col-md-10">
        <strong>Name:</strong> {name.first} {name.last}
        <br />
        <strong>Address:</strong> {location.street}, {location.city},{' '}
        {location.postcode}
        <br />
        <strong>Cell:</strong> {cell}
        <br />
        <strong>Email:</strong> {email}
      </div>
    </div>
  </div>
);

export default User;

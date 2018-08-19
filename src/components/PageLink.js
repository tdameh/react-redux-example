import React from 'react';
import PropTypes from 'prop-types';

const PageLink = ({ children, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
);

PageLink.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default PageLink;

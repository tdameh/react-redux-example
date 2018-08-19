import React from 'react';
import PropTypes from 'prop-types';
import PageLink from './PageLink';

const Footer = ({
  page,
  total,
  loading,
  disabledPrev,
  disabledNext,
  nextPage,
  prevPage
}) => (
  <div className={loading ? 'hidden' : ''}>
    {page} / {total}
    <PageLink disabled={disabledPrev} onClick={() => prevPage()}>
      PREV
    </PageLink>
    <PageLink disabled={disabledNext} onClick={() => nextPage()}>
      NEXT
    </PageLink>
  </div>
);

Footer.propTypes = {
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  disabledPrev: PropTypes.bool.isRequired,
  disabledNext: PropTypes.bool.isRequired,
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired
};

export default Footer;

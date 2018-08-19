import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { nextPage, prevPage } from '../actions';

const mapStateToProps = state => ({
  page: state.paginatedUsers.page,
  total: Math.ceil(
    state.paginatedUsers.cacheList.length / state.paginatedUsers.per
  ),
  loading: state.loading,
  disabledPrev: state.paginatedUsers.page <= 1,
  disabledNext:
    state.paginatedUsers.page >=
    Math.ceil(state.paginatedUsers.cacheList.length / state.paginatedUsers.per)
});

const mapDispatchToProps = dispatch => ({
  nextPage: () => dispatch(nextPage()),
  prevPage: () => dispatch(prevPage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

import { connect } from 'react-redux';
import Header from '../components/Header';
import { sortUsers, filterUsers } from '../actions';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  sortUsers: by => dispatch(sortUsers(by)),
  filterUsers: filter => dispatch(filterUsers(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

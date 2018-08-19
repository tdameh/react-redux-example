import { connect } from 'react-redux';
import Users from '../components/Users';

const mapStateToProps = state => ({
  users: state.paginatedUsers.pageList,
  loading: state.loading
});

export default connect(mapStateToProps)(Users);

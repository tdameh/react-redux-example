import { combineReducers } from 'redux';
import paginatedUsers from './users';
import loading from './loading';

export default combineReducers({
  paginatedUsers,
  loading
});

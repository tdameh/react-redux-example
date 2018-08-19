import paginated from 'paginated-redux';
import { GET_DATA_RECEIVED } from '../constants/DataServiceEvents';
import {
  GOTO_PAGE,
  NEXT_PAGE,
  PREV_PAGE,
  SORT_USERS,
  FILTER_USERS
} from '../constants/ActionTypes';

const users = (state = [], action) => {
  switch (action.type) {
    case GET_DATA_RECEIVED:
      return action.data;
    default:
      return state;
  }
};

const paginatedUsers = paginated(
  users,
  {
    GOTO_PAGE: GOTO_PAGE,
    NEXT_PAGE: NEXT_PAGE,
    PREV_PAGE: PREV_PAGE,
    FILTER: FILTER_USERS,
    SORT: SORT_USERS
  },
  {
    defaultSortOrder: 'asc',
    defaultSortBy: 'email'
  }
);

export default paginatedUsers;

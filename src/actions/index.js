import {
  GOTO_PAGE,
  NEXT_PAGE,
  PREV_PAGE,
  SORT_USERS,
  FILTER_USERS
} from '../constants/ActionTypes';

export const gotoPage = page => ({
  type: GOTO_PAGE,
  page
});

export const nextPage = () => ({
  type: NEXT_PAGE
});

export const prevPage = () => ({
  type: PREV_PAGE
});

export const sortUsers = by => ({
  type: SORT_USERS,
  by
});

export const filterUsers = filter => ({
  type: FILTER_USERS,
  filter
});

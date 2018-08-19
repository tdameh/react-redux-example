import request from 'superagent';
import { GOTO_PAGE } from '../constants/ActionTypes';
import {
  GET_DATA,
  GET_DATA_RECEIVED,
  GET_DATA_ERROR
} from '../constants/DataServiceEvents';

const api = 'https://randomuser.me/api?results=5000';

const dataService = store => next => action => {
  next(action);
  switch (action.type) {
    case GET_DATA:
      request.get(api).end((err, res) => {
        if (err) {
          return next({
            type: GET_DATA_ERROR,
            err
          });
        }
        const data = res.body.results;
        next({
          type: GET_DATA_RECEIVED,
          data
        });
        next({
          type: GOTO_PAGE,
          page: 1
        });
      });
      break;

    default:
      break;
  }
};

export default dataService;

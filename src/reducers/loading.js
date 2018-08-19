import {
  GET_DATA,
  GET_DATA_RECEIVED,
  GET_DATA_ERROR
} from '../constants/DataServiceEvents';

const loading = (state = false, action) => {
  switch (action.type) {
    case GET_DATA:
      return true;
    case GET_DATA_RECEIVED:
      return false;
    case GET_DATA_ERROR:
      return false;
    default:
      return state;
  }
};

export default loading;

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import App from './components/App';
import dataService from './services/dataService';
import { GET_DATA } from './constants/DataServiceEvents';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(reducers, {}, applyMiddleware(dataService));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch({ type: GET_DATA });

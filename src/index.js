import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components';
import store from './redux/store';
import './index.css';

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('lexicata')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Navigator from './navigation';
import './index.css';
import reducer from '../src/reducer';
import logger from 'redux-logger';

const Store = createStore((reducer), applyMiddleware(logger));


ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <Navigator />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


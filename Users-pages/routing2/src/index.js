import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Navigator from './navigation';
import './index.css';
import reducer from '../src/reducer';

const Store = createStore(reducer)


ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <Navigator />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


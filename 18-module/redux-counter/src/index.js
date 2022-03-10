import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider as StoreProvider } from 'react-redux'
import { store } from './store/index'

import './index.css';

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
document.getElementById('root'));

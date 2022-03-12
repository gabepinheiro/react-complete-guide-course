import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux'
import { store } from './store';

import App from './App';

import './index.css';

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root'
));

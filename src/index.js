import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from './Contex/contex'

ReactDOM.render(
  <Provider>
      <App />
  </Provider>,
  document.getElementById('root')
);



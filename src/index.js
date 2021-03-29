import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SpeechProvider } from '@speechly/react-client'

import { Provider } from './Contex/contex'
import App from './App';


ReactDOM.render(
  <SpeechProvider appId='a9046d3d-5441-4e27-8ec0-58c32e2ae2df' language='en-US'>
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);



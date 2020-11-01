import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';

ReactDOM.render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

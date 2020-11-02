import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import stores from './stores'

ReactDOM.render(
  <StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);

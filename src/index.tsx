import React, { StrictMode, createContext } from 'react';
import stores from './stores'
import ReactDOM from 'react-dom';
import App from './App';

export const CurrenciesStore = createContext<typeof stores | null>(null)

ReactDOM.render(
  <StrictMode>
    <CurrenciesStore.Provider value={stores}>
      <App />
    </CurrenciesStore.Provider>
  </StrictMode>,
  document.getElementById('root'),
);

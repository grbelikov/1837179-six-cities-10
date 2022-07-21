import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  SUGGESTIONS_AMOUNT: 123,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      suggestionsAmount = {Setting.SUGGESTIONS_AMOUNT}
    />
  </React.StrictMode>,
);

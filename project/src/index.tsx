import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {cityPoints} from './mocks/city';
import {points} from './mocks/points';
import {Provider} from 'react-redux';
import {store} from './store';

const Setting = {
  SUGGESTIONS_AMOUNT: 123,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        suggestionsAmount = {Setting.SUGGESTIONS_AMOUNT}
        offers = {offers}
        points={points}
        cityPoints={cityPoints}
      />
    </Provider>
  </React.StrictMode>,
);

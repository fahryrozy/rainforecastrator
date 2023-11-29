import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '@core/config/store';
import Router from '@presentation/nav';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://7a869e86bab5b05a6269dbc04002f485@o4506310299942912.ingest.sentry.io/4506310301777920',
});

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;

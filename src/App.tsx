import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '@core/config/store';
import Router from '@presentation/nav';
import Config from 'react-native-config';
import * as Sentry from '@sentry/react-native';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import ErrorScreen from '@presentation/screens/Error/ErrorScreen';

Sentry.init({
  dsn: Config.SENTRY_DSN,
});

type FallBackRenderProps = {
  error: Error;
  resetError: () => void;
};

const myFallbackRender = ({error, resetError}: FallBackRenderProps) => (
  <ErrorScreen error={error} resetError={resetError} />
);

const errorHandler = (e: any) => {
  Sentry.captureException(e);
};

setJSExceptionHandler(errorHandler, true);
setNativeExceptionHandler(errorString => {
  Sentry.captureException('[Native Exception] ' + errorString);
}, true);

const App = () => {
  return (
    <Provider store={store}>
      <Sentry.ErrorBoundary fallback={myFallbackRender}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Sentry.ErrorBoundary>
    </Provider>
  );
};

export default App;

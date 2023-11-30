import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '@core/config/store';
import Router from '@presentation/nav';
import * as Sentry from '@sentry/react-native';
import Config from 'react-native-config';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import FallbackComponent from '@presentation/components/molecules/FallBackError/FallBackError';

Sentry.init({
  dsn: Config.SENTRY_DSN,
});

const errorHandler = (e: any) => {
  Sentry.captureException(e);
};

setJSExceptionHandler(errorHandler, true);

setNativeExceptionHandler(errorString => {
  console.log('setNativeExceptionHandler => ', errorString);
}, true);

type FallBackRenderProps = {
  error: Error;
  resetError: () => void;
};

const myFallbackRender = ({error, resetError}: FallBackRenderProps) => (
  <FallbackComponent error={error} resetError={resetError} />
);

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

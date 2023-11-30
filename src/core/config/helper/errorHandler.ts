import * as Sentry from '@sentry/react-native';

export const errorHandler = (e: any) => {
  Sentry.captureException(e);
};

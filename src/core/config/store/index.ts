import {configureStore} from '@reduxjs/toolkit';
import LocationReducer from './slice/locationSlice';
import LoadingReducer from './slice/loadingSlice';
import {
  persistCombineReducers,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const reduxStorage: Storage = {
  setItem: (key, value) => storage.set(key, value),
  // @ts-ignore
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => storage.delete(key),
};

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
};

const persistedReducer = persistCombineReducers(persistConfig, {
  LocationReducer,
  LoadingReducer,
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

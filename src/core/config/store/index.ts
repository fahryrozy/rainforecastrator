import {configureStore} from '@reduxjs/toolkit';
import ForecastReducer from './slice/forecastSlice';
import SelectHourReducer from './slice/selectHourlySlice';
import CurrentWeatherReducer from './slice/currentWeatherSlice';
import AstronomyReducer from './slice/astronomySlice';
import LocationReducer from './slice/locationSlice';
import SelectedDateReducer from './slice/dateSlice';
import HistoryForecastReducer from './slice/historySlice';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistCombineReducers(persistConfig, {
  ForecastReducer,
  SelectHourReducer,
  LocationReducer,
  CurrentWeatherReducer,
  AstronomyReducer,
  SelectedDateReducer,
  HistoryForecastReducer,
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

import {Alerts, Forecast, Location} from '@domain/entities';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';
import {IForecastPayload} from '../payload/forecastPayload';

export interface ForecastWeather {
  location: Location;
  forecast: Forecast;
}

const initialState: ForecastWeather = {
  location: <Location>{},
  forecast: <Forecast>{},
};

export const HistoryForecastSlice = createSlice({
  name: 'FORECAST_SLICE',
  initialState,
  reducers: {
    storeHistoryForecast: (state, action: PayloadAction<ForecastWeather>) => {
      state.location = action.payload.location;
      state.forecast = action.payload.forecast;
    },
  },
});

export const {storeHistoryForecast} = HistoryForecastSlice.actions;

export const historyStore = (state: RootState) => state.HistoryForecastReducer;

export default HistoryForecastSlice.reducer;

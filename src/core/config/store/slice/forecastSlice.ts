import {Alerts, Forecast, Location} from '@domain/entities';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../';
import {IForecastPayload} from '../payload/forecastPayload';

export interface ForecastWeather {
  location: Location;
  forecast: Forecast;
  alerts: Alerts;
}

const initialState: ForecastWeather = {
  location: <Location>{},
  forecast: <Forecast>{},
  alerts: <Alerts>{},
};

export const ForecastSlice = createSlice({
  name: 'FORECAST_SLICE',
  initialState,
  reducers: {
    storeForecast: (state, action: PayloadAction<IForecastPayload>) => {
      state.location = action.payload.location;
      state.forecast = action.payload.forecast;
      state.alerts = action.payload.alerts;
    },
  },
});

export const {storeForecast} = ForecastSlice.actions;

export const forecastStore = (state: RootState) => state.ForecastReducer;

export default ForecastSlice.reducer;

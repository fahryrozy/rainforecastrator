import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';
import {ICurrentWeather} from '../payload/currentWeatherPayload';
import {Current, Location} from '@domain/entities';

const initialState = {
  current: <Current>{},
  location: <Location>{},
};

export const CurrentWeatherSlice = createSlice({
  name: 'CURRENT_WEATHER_SLICE',
  initialState,
  reducers: {
    setCurrentWeather: (state, action: PayloadAction<ICurrentWeather>) => {
      state.current = action.payload.current;
      state.location = action.payload.location;
    },
  },
});

export const {setCurrentWeather} = CurrentWeatherSlice.actions;

export const currentStore = (state: RootState) => state.CurrentWeatherReducer;

export default CurrentWeatherSlice.reducer;

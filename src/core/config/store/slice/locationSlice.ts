import {LocationSearch} from '@domain/entities';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';

export interface LocationState {
  selectedLocation: LocationSearch;
  locationList: LocationSearch[];
}

const initialState: LocationState = {
  selectedLocation: {
    country: 'Indonesia',
    id: 3026315,
    lat: -6.21,
    lon: 106.85,
    name: 'Jakarta',
    region: 'Jakarta Raya',
    url: 'jakarta-jakarta-raya-indonesia',
  },
  locationList: <LocationSearch[]>[],
};

export const SetLocationSlice = createSlice({
  name: 'SET_LOCATION_SLICE',
  initialState,
  reducers: {
    saveLocationHistory: (state, action: PayloadAction<LocationState>) => {
      state.locationList = action.payload.locationList;
    },
    setLocation: (state, action: PayloadAction<LocationState>) => {
      state.selectedLocation = action.payload.selectedLocation;
    },
  },
});

export const {saveLocationHistory, setLocation} = SetLocationSlice.actions;

export const locationStore = (state: RootState) => state.LocationReducer;

export default SetLocationSlice.reducer;

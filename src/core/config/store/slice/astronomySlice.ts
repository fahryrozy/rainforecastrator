import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';
import {IAstronomyPayload} from '../payload/astronomyPayload';
import {Astronomy, Location} from '@domain/entities';

const initialState = {
  astronomy: <Astronomy>{},
  location: <Location>{},
};

export const AstronomySlice = createSlice({
  name: 'ASTRONOMY_SLICE',
  initialState,
  reducers: {
    setAstronomy: (state, action: PayloadAction<IAstronomyPayload>) => {
      state.astronomy = action.payload.astronomy;
      state.location = action.payload.location;
    },
  },
});

export const {setAstronomy} = AstronomySlice.actions;

export const astronomyStore = (state: RootState) => state.AstronomyReducer;

export default AstronomySlice.reducer;

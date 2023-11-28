import {Hour} from '@domain/entities';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';

export interface HourlyCondition {
  selectedCondition: Hour;
}

const initialState: HourlyCondition = {
  selectedCondition: <Hour>{},
};

export const SelectHourlySlice = createSlice({
  name: 'SELECT_HOUR_SLICE',
  initialState,
  reducers: {
    selectHour: (state, action: PayloadAction<HourlyCondition>) => {
      state.selectedCondition = action.payload.selectedCondition;
    },
  },
});

export const {selectHour} = SelectHourlySlice.actions;

export const selectedHourlyConditionStore = (state: RootState) =>
  state.SelectHourReducer;

export default SelectHourlySlice.reducer;

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';
import moment from 'moment';
export interface SelectedDate {
  date: string;
}

const initialState: SelectedDate = {
  date: moment(new Date()).format('YYYY-MM-DD'),
};

export const SetSelectedDate = createSlice({
  name: 'SET_LOCATION_SLICE',
  initialState,
  reducers: {
    selectDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
  },
});

export const {selectDate} = SetSelectedDate.actions;

export const selectedDateStore = (state: RootState) =>
  state.SelectedDateReducer;

export default SetSelectedDate.reducer;

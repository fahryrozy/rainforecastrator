import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '..';

export interface LoadingState {
  isLoading?: boolean;
  isFetching?: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
  isFetching: false,
};

export const SetLoadingSlice = createSlice({
  name: 'SET_LOADING_SLICE',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<LoadingState>) => {
      state.isLoading = action.payload.isLoading;
    },
    setIsFetching: (state, action: PayloadAction<LoadingState>) => {
      state.isFetching = action.payload.isFetching;
    },
  },
});

export const {setIsLoading} = SetLoadingSlice.actions;

export const loadingStore = (state: RootState) => state.LoadingReducer;

export default SetLoadingSlice.reducer;

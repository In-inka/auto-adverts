import { createSlice } from '@reduxjs/toolkit';
import { getAdverts } from './operations';

const handlePending = state => {
  state.adverts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.adverts.isLoading = false;
  state.adverts.error = action.payload;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: {
    [getAdverts.pending]: handlePending,
    [getAdverts.fulfilled](state, action) {
      state.adverts.isLoading = false;
      state.adverts.error = null;
      state.adverts.items = action.payload;
    },
    [getAdverts.rejected]: handleRejected,
  },
});

export const advertsReducer = advertsSlice.reducer;

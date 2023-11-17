import { createSlice } from '@reduxjs/toolkit';
import { getAdverts } from './operations';

const loadFavoritesFromLocalStorage = () => {
  const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return savedFavorites;
};

const saveFavoritesToLocalStorage = favorites => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const initialState = {
  adverts: {
    items: [],
    isLoading: false,
    error: null,
    favorites: loadFavoritesFromLocalStorage(),
  },
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const advertId = action.payload;
      state.adverts.favorites.push(advertId);
      saveFavoritesToLocalStorage(state.adverts.favorites);
    },
    removeFromFavorites(state, action) {
      const advertId = action.payload;
      state.adverts.favorites = state.adverts.favorites.filter(
        id => id !== advertId
      );
      saveFavoritesToLocalStorage(state.adverts.favorites);
    },
    handlePending(state) {
      state.adverts.isLoading = true;
    },
    handleRejected(state, action) {
      state.adverts.isLoading = false;
      state.adverts.error = action.payload;
    },
  },
  extraReducers: {
    [getAdverts.pending]: state => {
      state.adverts.isLoading = true;
    },
    [getAdverts.fulfilled](state, action) {
      state.adverts.isLoading = false;
      state.adverts.error = null;
      state.adverts.items = action.payload;
    },
    [getAdverts.rejected]: (state, action) => {
      state.adverts.isLoading = false;
      state.adverts.error = action.payload;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;

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
    nextPage: 1,
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
    resetAdverts(state) {
      state.adverts.items = [];
      state.adverts.nextPage = 1;
    },
  },
  extraReducers: {
    [getAdverts.pending]: state => {
      state.adverts.isLoading = true;
    },
    [getAdverts.fulfilled](state, action) {
      state.adverts.isLoading = false;
      state.adverts.error = null;
      state.adverts.items = [...state.adverts.items, ...action.payload];
      state.adverts.nextPage += 1;
    },
    [getAdverts.rejected]: (state, action) => {
      state.adverts.isLoading = false;
      state.adverts.error = action.payload;
    },
  },
});

export const { addToFavorites, removeFromFavorites, resetAdverts } =
  advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;

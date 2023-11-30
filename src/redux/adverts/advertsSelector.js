import { createSelector } from 'reselect';

export const selectAdverts = state => state.adverts.adverts.items;
export const selectFavoriteIds = state => state.adverts.adverts.favorites;

export const getAdvertsItem = state => selectAdverts(state);

export const getIsLoading = state => state.adverts.adverts.isLoading;

export const getError = state => state.adverts.adverts.error;

export const selectFavoriteAdverts = createSelector(
  [selectAdverts, selectFavoriteIds],
  (adverts, favoriteIds) => {
    return adverts.filter(advert => favoriteIds.includes(advert.id));
  }
);

export const selectPage = state => state.adverts.adverts.nextPage;

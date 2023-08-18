import { ItemState } from '@core/models/item.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectItems = (state: AppState) => state.items;

export const selectListItems = createSelector(
  selectItems,
  (state: ItemState) => state.items
);

export const selectLoading = createSelector(
  selectItems,
  (state: ItemState) => state.loading
);

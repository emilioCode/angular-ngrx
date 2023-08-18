import { ItemState } from '@core/models/item.state';
import { createReducer, on } from '@ngrx/store';
import { cleanItems, loadedItems, loadItems } from '../actions/items.actions';

export const initialItemsState: ItemState = { loading: false, items: [] };

export const itemsReducer = createReducer(
  initialItemsState,
  on(loadItems, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedItems, (state, { items }) => {
    return { ...state, loading: false, items: items }
  }),
  on(cleanItems, (state) => {
    return { ...state, loading: false, items: [] }
  })
);

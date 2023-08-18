import { ItemState } from '@core/models/item.state';
import { ActionReducerMap } from '@ngrx/store';
import { itemsReducer } from './reducers/items.reducers';

export interface AppState {
  items: ItemState;
}

export const appReducer: ActionReducerMap<AppState> = {
  items: itemsReducer,
};

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadItems, loadedItems, cleanItems } from 'src/app/state/actions/items.actions';
import { selectListItems, selectLoading } from 'src/app/state/selectors/items.selectors';

@Component({
  selector: 'app-ui-block-item',
  templateUrl: './ui-block-item.component.html',
  styleUrls: ['./ui-block-item.component.scss']
})
export class UiBlockItemComponent implements OnInit, OnDestroy {
  loading$: Observable<boolean> = new Observable();
  items$: Observable<any> = new Observable();

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.items$ = this.store.select(selectListItems);

    this.store.dispatch(loadItems());
  }

  ngOnDestroy(): void {
    this.store.dispatch(cleanItems());
  }

}

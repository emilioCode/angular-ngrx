import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-item',
  templateUrl: './ui-item.component.html',
  styleUrls: ['./ui-item.component.scss']
})
export class UiItemComponent {
  @Input() item: any;
}

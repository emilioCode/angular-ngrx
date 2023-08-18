import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowCaseRoutingModule } from './show-case-routing.module';
import { ShowCasePageComponent } from './pages/show-case-page/show-case-page.component';
import { UiBlockItemComponent } from './components/ui-block-item/ui-block-item.component';
import { UiItemComponent } from './components/ui-item/ui-item.component';

@NgModule({
  declarations: [ShowCasePageComponent, UiBlockItemComponent, UiItemComponent],
  imports: [
    CommonModule,
    ShowCaseRoutingModule
  ]
})
export class ShowCaseModule { }

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBlockItemComponent } from './ui-block-item.component';

describe('UiBlockItemComponent', () => {
  let component: UiBlockItemComponent;
  let fixture: ComponentFixture<UiBlockItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiBlockItemComponent]
    });
    fixture = TestBed.createComponent(UiBlockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

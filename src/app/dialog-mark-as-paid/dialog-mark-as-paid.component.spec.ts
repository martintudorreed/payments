import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMarkAsPaidComponent } from './dialog-mark-as-paid.component';

describe('DialogMarkAsPaidComponent', () => {
  let component: DialogMarkAsPaidComponent;
  let fixture: ComponentFixture<DialogMarkAsPaidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogMarkAsPaidComponent]
    });
    fixture = TestBed.createComponent(DialogMarkAsPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

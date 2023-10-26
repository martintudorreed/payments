import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPaymentAppComponent } from './dialog-payment-app.component';

describe('DialogPaymentAppComponent', () => {
  let component: DialogPaymentAppComponent;
  let fixture: ComponentFixture<DialogPaymentAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogPaymentAppComponent]
    });
    fixture = TestBed.createComponent(DialogPaymentAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

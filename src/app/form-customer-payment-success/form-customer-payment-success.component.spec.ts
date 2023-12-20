import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCustomerPaymentSuccessComponent } from './form-customer-payment-success.component';

describe('FormCustomerPaymentSuccessComponent', () => {
  let component: FormCustomerPaymentSuccessComponent;
  let fixture: ComponentFixture<FormCustomerPaymentSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCustomerPaymentSuccessComponent]
    });
    fixture = TestBed.createComponent(FormCustomerPaymentSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

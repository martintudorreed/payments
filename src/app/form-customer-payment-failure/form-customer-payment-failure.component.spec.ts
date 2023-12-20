import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCustomerPaymentFailureComponent } from './form-customer-payment-failure.component';

describe('FormCustomerPaymentFailureComponent', () => {
  let component: FormCustomerPaymentFailureComponent;
  let fixture: ComponentFixture<FormCustomerPaymentFailureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCustomerPaymentFailureComponent]
    });
    fixture = TestBed.createComponent(FormCustomerPaymentFailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCustomerPaymentComponent } from './form-customer-payment.component';

describe('FormCustomerPaymentComponent', () => {
  let component: FormCustomerPaymentComponent;
  let fixture: ComponentFixture<FormCustomerPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCustomerPaymentComponent]
    });
    fixture = TestBed.createComponent(FormCustomerPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

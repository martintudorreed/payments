import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewPaymentComponent } from './form-new-payment.component';

describe('FormNewPaymentComponent', () => {
  let component: FormNewPaymentComponent;
  let fixture: ComponentFixture<FormNewPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormNewPaymentComponent]
    });
    fixture = TestBed.createComponent(FormNewPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

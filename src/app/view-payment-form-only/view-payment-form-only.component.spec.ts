import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentFormOnlyComponent } from './view-payment-form-only.component';

describe('ViewPaymentFormOnlyComponent', () => {
  let component: ViewPaymentFormOnlyComponent;
  let fixture: ComponentFixture<ViewPaymentFormOnlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPaymentFormOnlyComponent]
    });
    fixture = TestBed.createComponent(ViewPaymentFormOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

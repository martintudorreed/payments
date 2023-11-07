import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentFormNewComponent } from './view-payment-form-new.component';

describe('ViewPaymentFormNewComponent', () => {
  let component: ViewPaymentFormNewComponent;
  let fixture: ComponentFixture<ViewPaymentFormNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPaymentFormNewComponent]
    });
    fixture = TestBed.createComponent(ViewPaymentFormNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

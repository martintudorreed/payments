import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsPaymentFormComponent } from './controls-payment-form.component';

describe('ControlsPaymentFormComponent', () => {
  let component: ControlsPaymentFormComponent;
  let fixture: ComponentFixture<ControlsPaymentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlsPaymentFormComponent]
    });
    fixture = TestBed.createComponent(ControlsPaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

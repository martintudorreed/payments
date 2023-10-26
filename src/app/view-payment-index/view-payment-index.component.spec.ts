import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentIndexComponent } from './view-payment-index.component';

describe('ViewPaymentIndexComponent', () => {
  let component: ViewPaymentIndexComponent;
  let fixture: ComponentFixture<ViewPaymentIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPaymentIndexComponent]
    });
    fixture = TestBed.createComponent(ViewPaymentIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

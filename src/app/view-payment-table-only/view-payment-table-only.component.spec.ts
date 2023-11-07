import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentTableOnlyComponent } from './view-payment-table-only.component';

describe('ViewPaymentTableOnlyComponent', () => {
  let component: ViewPaymentTableOnlyComponent;
  let fixture: ComponentFixture<ViewPaymentTableOnlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPaymentTableOnlyComponent]
    });
    fixture = TestBed.createComponent(ViewPaymentTableOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

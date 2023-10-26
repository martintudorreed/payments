import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePaymentListComponent } from './table-payment-list.component';

describe('TablePaymentListComponent', () => {
  let component: TablePaymentListComponent;
  let fixture: ComponentFixture<TablePaymentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablePaymentListComponent]
    });
    fixture = TestBed.createComponent(TablePaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedDisplayInvoiceFromDataComponent } from './archived-display-invoice-from-data.component';

describe('ArchivedDisplayInvoiceFromDataComponent', () => {
  let component: ArchivedDisplayInvoiceFromDataComponent;
  let fixture: ComponentFixture<ArchivedDisplayInvoiceFromDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivedDisplayInvoiceFromDataComponent]
    });
    fixture = TestBed.createComponent(ArchivedDisplayInvoiceFromDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

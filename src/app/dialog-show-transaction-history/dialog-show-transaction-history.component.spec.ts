import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogShowTransactionHistoryComponent } from './dialog-show-transaction-history.component';

describe('DialogShowTransactionHistoryComponent', () => {
  let component: DialogShowTransactionHistoryComponent;
  let fixture: ComponentFixture<DialogShowTransactionHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogShowTransactionHistoryComponent]
    });
    fixture = TestBed.createComponent(DialogShowTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

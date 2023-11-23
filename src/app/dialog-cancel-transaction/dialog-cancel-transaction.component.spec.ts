import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCancelTransactionComponent } from './dialog-cancel-transaction.component';

describe('DialogCancelTransactionComponent', () => {
  let component: DialogCancelTransactionComponent;
  let fixture: ComponentFixture<DialogCancelTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCancelTransactionComponent]
    });
    fixture = TestBed.createComponent(DialogCancelTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

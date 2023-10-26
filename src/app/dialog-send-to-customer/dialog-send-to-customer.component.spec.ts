import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSendToCustomerComponent } from './dialog-send-to-customer.component';

describe('DialogSendToCustomerComponent', () => {
  let component: DialogSendToCustomerComponent;
  let fixture: ComponentFixture<DialogSendToCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogSendToCustomerComponent]
    });
    fixture = TestBed.createComponent(DialogSendToCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

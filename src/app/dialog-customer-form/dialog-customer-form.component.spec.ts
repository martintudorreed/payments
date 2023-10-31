import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCustomerFormComponent } from './dialog-customer-form.component';

describe('DialogCustomerFormComponent', () => {
  let component: DialogCustomerFormComponent;
  let fixture: ComponentFixture<DialogCustomerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCustomerFormComponent]
    });
    fixture = TestBed.createComponent(DialogCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

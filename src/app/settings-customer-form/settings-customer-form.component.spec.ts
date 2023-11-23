import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCustomerFormComponent } from './settings-customer-form.component';

describe('SettingsCustomerFormComponent', () => {
  let component: SettingsCustomerFormComponent;
  let fixture: ComponentFixture<SettingsCustomerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsCustomerFormComponent]
    });
    fixture = TestBed.createComponent(SettingsCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDisclaimersComponent } from './settings-disclaimers.component';

describe('SettingsDisclaimersComponent', () => {
  let component: SettingsDisclaimersComponent;
  let fixture: ComponentFixture<SettingsDisclaimersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsDisclaimersComponent]
    });
    fixture = TestBed.createComponent(SettingsDisclaimersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsEmailDetailsComponent } from './settings-email-details.component';

describe('SettingsEmailDetailsComponent', () => {
  let component: SettingsEmailDetailsComponent;
  let fixture: ComponentFixture<SettingsEmailDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsEmailDetailsComponent]
    });
    fixture = TestBed.createComponent(SettingsEmailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

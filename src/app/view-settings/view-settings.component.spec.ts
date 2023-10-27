import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSettingsComponent } from './view-settings.component';

describe('ViewSettingsComponent', () => {
  let component: ViewSettingsComponent;
  let fixture: ComponentFixture<ViewSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSettingsComponent]
    });
    fixture = TestBed.createComponent(ViewSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

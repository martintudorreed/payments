import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTriageComponent } from './header-triage.component';

describe('HeaderTriageComponent', () => {
  let component: HeaderTriageComponent;
  let fixture: ComponentFixture<HeaderTriageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderTriageComponent]
    });
    fixture = TestBed.createComponent(HeaderTriageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

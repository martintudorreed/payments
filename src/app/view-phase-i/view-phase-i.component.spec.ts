import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPhaseIComponent } from './view-phase-i.component';

describe('ViewPhaseIComponent', () => {
  let component: ViewPhaseIComponent;
  let fixture: ComponentFixture<ViewPhaseIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPhaseIComponent]
    });
    fixture = TestBed.createComponent(ViewPhaseIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

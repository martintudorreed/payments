import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlButtonFilterOverlayComponent } from './control-button-filter-overlay.component';

describe('ControlButtonFilterOverlayComponent', () => {
  let component: ControlButtonFilterOverlayComponent;
  let fixture: ComponentFixture<ControlButtonFilterOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlButtonFilterOverlayComponent]
    });
    fixture = TestBed.createComponent(ControlButtonFilterOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlEmailViewerComponent } from './control-email-viewer.component';

describe('ControlEmailViewerComponent', () => {
  let component: ControlEmailViewerComponent;
  let fixture: ComponentFixture<ControlEmailViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlEmailViewerComponent]
    });
    fixture = TestBed.createComponent(ControlEmailViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

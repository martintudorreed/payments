import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTemplateViewerComponent } from './control-template-viewer.component';

describe('ControlTemplateViewerComponent', () => {
  let component: ControlTemplateViewerComponent;
  let fixture: ComponentFixture<ControlTemplateViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlTemplateViewerComponent]
    });
    fixture = TestBed.createComponent(ControlTemplateViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

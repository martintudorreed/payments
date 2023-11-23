import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSmsTemplateViewerComponent } from './control-sms-template-viewer.component';

describe('ControlSmsTemplateViewerComponent', () => {
  let component: ControlSmsTemplateViewerComponent;
  let fixture: ComponentFixture<ControlSmsTemplateViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlSmsTemplateViewerComponent]
    });
    fixture = TestBed.createComponent(ControlSmsTemplateViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

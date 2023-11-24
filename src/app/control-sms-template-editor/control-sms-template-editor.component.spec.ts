import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSmsTemplateEditorComponent } from './control-sms-template-editor.component';

describe('ControlSmsTemplateEditorComponent', () => {
  let component: ControlSmsTemplateEditorComponent;
  let fixture: ComponentFixture<ControlSmsTemplateEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlSmsTemplateEditorComponent]
    });
    fixture = TestBed.createComponent(ControlSmsTemplateEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

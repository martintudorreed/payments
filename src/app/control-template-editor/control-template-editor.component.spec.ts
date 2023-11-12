import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlTemplateEditorComponent } from './control-template-editor.component';

describe('ControlTemplateEditorComponent', () => {
  let component: ControlTemplateEditorComponent;
  let fixture: ComponentFixture<ControlTemplateEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlTemplateEditorComponent]
    });
    fixture = TestBed.createComponent(ControlTemplateEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

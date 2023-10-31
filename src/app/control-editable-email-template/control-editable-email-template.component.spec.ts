import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlEditableEmailTemplateComponent } from './control-editable-email-template.component';

describe('ControlEditableEmailTemplateComponent', () => {
  let component: ControlEditableEmailTemplateComponent;
  let fixture: ComponentFixture<ControlEditableEmailTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlEditableEmailTemplateComponent]
    });
    fixture = TestBed.createComponent(ControlEditableEmailTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

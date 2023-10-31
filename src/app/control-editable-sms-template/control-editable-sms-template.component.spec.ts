import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlEditableSmsTemplateComponent } from './control-editable-sms-template.component';

describe('ControlEditableSmsTemplateComponent', () => {
  let component: ControlEditableSmsTemplateComponent;
  let fixture: ComponentFixture<ControlEditableSmsTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlEditableSmsTemplateComponent]
    });
    fixture = TestBed.createComponent(ControlEditableSmsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDisplaySendMethodsComponent } from './control-display-send-methods.component';

describe('ControlDisplaySendMethodsComponent', () => {
  let component: ControlDisplaySendMethodsComponent;
  let fixture: ComponentFixture<ControlDisplaySendMethodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlDisplaySendMethodsComponent]
    });
    fixture = TestBed.createComponent(ControlDisplaySendMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

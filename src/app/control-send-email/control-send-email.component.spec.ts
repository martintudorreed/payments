import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSendEmailComponent } from './control-send-email.component';

describe('ControlSendEmailComponent', () => {
  let component: ControlSendEmailComponent;
  let fixture: ComponentFixture<ControlSendEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlSendEmailComponent]
    });
    fixture = TestBed.createComponent(ControlSendEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

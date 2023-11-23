import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlEmailDetailsComponent } from './control-email-details.component';

describe('ControlEmailDetailsComponent', () => {
  let component: ControlEmailDetailsComponent;
  let fixture: ComponentFixture<ControlEmailDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlEmailDetailsComponent]
    });
    fixture = TestBed.createComponent(ControlEmailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

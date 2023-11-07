import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSerachInputComponent } from './control-serach-input.component';

describe('ControlSerachInputComponent', () => {
  let component: ControlSerachInputComponent;
  let fixture: ComponentFixture<ControlSerachInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlSerachInputComponent]
    });
    fixture = TestBed.createComponent(ControlSerachInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

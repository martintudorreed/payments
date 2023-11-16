import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlImageManagerComponent } from './control-image-manager.component';

describe('ControlImageManagerComponent', () => {
  let component: ControlImageManagerComponent;
  let fixture: ComponentFixture<ControlImageManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlImageManagerComponent]
    });
    fixture = TestBed.createComponent(ControlImageManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

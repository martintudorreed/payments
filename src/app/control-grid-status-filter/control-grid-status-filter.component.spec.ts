import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlGridStatusFilterComponent } from './control-grid-status-filter.component';

describe('ControlGridStatusFilterComponent', () => {
  let component: ControlGridStatusFilterComponent;
  let fixture: ComponentFixture<ControlGridStatusFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlGridStatusFilterComponent]
    });
    fixture = TestBed.createComponent(ControlGridStatusFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlGridFiltersComponent } from './control-grid-filters.component';

describe('ControlGridFiltersComponent', () => {
  let component: ControlGridFiltersComponent;
  let fixture: ComponentFixture<ControlGridFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlGridFiltersComponent]
    });
    fixture = TestBed.createComponent(ControlGridFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

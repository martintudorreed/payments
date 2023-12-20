import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlGridFiltersDropdownComponent } from './control-grid-filters-dropdown.component';

describe('ControlGridFiltersDropdownComponent', () => {
  let component: ControlGridFiltersDropdownComponent;
  let fixture: ComponentFixture<ControlGridFiltersDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlGridFiltersDropdownComponent]
    });
    fixture = TestBed.createComponent(ControlGridFiltersDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

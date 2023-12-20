import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlChipCreatedByFilterComponent } from './control-chip-created-by-filter.component';

describe('ControlChipCreatedByFilterComponent', () => {
  let component: ControlChipCreatedByFilterComponent;
  let fixture: ComponentFixture<ControlChipCreatedByFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlChipCreatedByFilterComponent]
    });
    fixture = TestBed.createComponent(ControlChipCreatedByFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

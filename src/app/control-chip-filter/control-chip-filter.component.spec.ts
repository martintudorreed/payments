import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlChipFilterComponent } from './control-chip-filter.component';

describe('ControlChipFilterComponent', () => {
  let component: ControlChipFilterComponent;
  let fixture: ComponentFixture<ControlChipFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlChipFilterComponent]
    });
    fixture = TestBed.createComponent(ControlChipFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

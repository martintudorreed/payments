import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlChipDealershipFilterComponent } from './control-chip-dealership-filter.component';

describe('ControlChipDealershipFilterComponent', () => {
  let component: ControlChipDealershipFilterComponent;
  let fixture: ComponentFixture<ControlChipDealershipFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlChipDealershipFilterComponent]
    });
    fixture = TestBed.createComponent(ControlChipDealershipFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

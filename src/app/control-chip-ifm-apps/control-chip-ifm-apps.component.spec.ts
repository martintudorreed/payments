import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlChipIfmAppsComponent } from './control-chip-ifm-apps.component';

describe('ControlChipIfmAppsComponent', () => {
  let component: ControlChipIfmAppsComponent;
  let fixture: ComponentFixture<ControlChipIfmAppsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlChipIfmAppsComponent]
    });
    fixture = TestBed.createComponent(ControlChipIfmAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlProviderSelectComponent } from './control-provider-select.component';

describe('ControlProviderSelectComponent', () => {
  let component: ControlProviderSelectComponent;
  let fixture: ComponentFixture<ControlProviderSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlProviderSelectComponent]
    });
    fixture = TestBed.createComponent(ControlProviderSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

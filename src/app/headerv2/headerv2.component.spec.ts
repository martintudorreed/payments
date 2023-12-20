import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headerv2Component } from './headerv2.component';

describe('Headerv2Component', () => {
  let component: Headerv2Component;
  let fixture: ComponentFixture<Headerv2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Headerv2Component]
    });
    fixture = TestBed.createComponent(Headerv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

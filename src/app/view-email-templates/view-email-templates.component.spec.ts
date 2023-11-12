import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmailTemplatesComponent } from './view-email-templates.component';

describe('ViewEmailTemplatesComponent', () => {
  let component: ViewEmailTemplatesComponent;
  let fixture: ComponentFixture<ViewEmailTemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEmailTemplatesComponent]
    });
    fixture = TestBed.createComponent(ViewEmailTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

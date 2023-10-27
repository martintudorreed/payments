import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTabbedWorkspaceComponent } from './view-tabbed-workspace.component';

describe('ViewTabbedWorkspaceComponent', () => {
  let component: ViewTabbedWorkspaceComponent;
  let fixture: ComponentFixture<ViewTabbedWorkspaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTabbedWorkspaceComponent]
    });
    fixture = TestBed.createComponent(ViewTabbedWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

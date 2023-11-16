import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFullScreenEmailViewerComponent } from './dialog-full-screen-email-viewer.component';

describe('DialogFullScreenEmailViewerComponent', () => {
  let component: DialogFullScreenEmailViewerComponent;
  let fixture: ComponentFixture<DialogFullScreenEmailViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogFullScreenEmailViewerComponent]
    });
    fixture = TestBed.createComponent(DialogFullScreenEmailViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

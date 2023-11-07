import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDocumentViewerComponent } from './control-document-viewer.component';

describe('ControlDocumentViewerComponent', () => {
  let component: ControlDocumentViewerComponent;
  let fixture: ComponentFixture<ControlDocumentViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlDocumentViewerComponent]
    });
    fixture = TestBed.createComponent(ControlDocumentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

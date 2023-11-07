import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFullSecrrenDocViewerComponent } from './dialog-full-secrren-doc-viewer.component';

describe('DialogFullSecrrenDocViewerComponent', () => {
  let component: DialogFullSecrrenDocViewerComponent;
  let fixture: ComponentFixture<DialogFullSecrrenDocViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogFullSecrrenDocViewerComponent]
    });
    fixture = TestBed.createComponent(DialogFullSecrrenDocViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWelcomeComponent } from './dialog-welcome.component';

describe('DialogWelcomeComponent', () => {
  let component: DialogWelcomeComponent;
  let fixture: ComponentFixture<DialogWelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogWelcomeComponent]
    });
    fixture = TestBed.createComponent(DialogWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

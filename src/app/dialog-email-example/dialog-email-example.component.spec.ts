import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEmailExampleComponent } from './dialog-email-example.component';

describe('DialogEmailExampleComponent', () => {
  let component: DialogEmailExampleComponent;
  let fixture: ComponentFixture<DialogEmailExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogEmailExampleComponent]
    });
    fixture = TestBed.createComponent(DialogEmailExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

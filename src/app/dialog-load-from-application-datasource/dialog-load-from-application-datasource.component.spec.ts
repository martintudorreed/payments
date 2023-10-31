import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLoadFromApplicationDatasourceComponent } from './dialog-load-from-application-datasource.component';

describe('DialogLoadFromApplicationDatasourceComponent', () => {
  let component: DialogLoadFromApplicationDatasourceComponent;
  let fixture: ComponentFixture<DialogLoadFromApplicationDatasourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogLoadFromApplicationDatasourceComponent]
    });
    fixture = TestBed.createComponent(DialogLoadFromApplicationDatasourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTriageDataComponent } from './table-triage-data.component';

describe('TableTriageDataComponent', () => {
  let component: TableTriageDataComponent;
  let fixture: ComponentFixture<TableTriageDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableTriageDataComponent]
    });
    fixture = TestBed.createComponent(TableTriageDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

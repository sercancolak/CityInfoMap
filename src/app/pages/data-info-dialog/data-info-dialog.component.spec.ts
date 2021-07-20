import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInfoDialogComponent } from './data-info-dialog.component';

describe('DataInfoDialogComponent', () => {
  let component: DataInfoDialogComponent;
  let fixture: ComponentFixture<DataInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataInfoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

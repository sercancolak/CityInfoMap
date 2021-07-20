import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDataDialogComponent } from './new-data-dialog.component';

describe('NewDataDialogComponent', () => {
  let component: NewDataDialogComponent;
  let fixture: ComponentFixture<NewDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDataDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

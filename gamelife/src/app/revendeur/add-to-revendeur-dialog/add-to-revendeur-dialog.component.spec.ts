import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToRevendeurDialogComponent } from './add-to-revendeur-dialog.component';

describe('AddToRevendeurDialogComponent', () => {
  let component: AddToRevendeurDialogComponent;
  let fixture: ComponentFixture<AddToRevendeurDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToRevendeurDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToRevendeurDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

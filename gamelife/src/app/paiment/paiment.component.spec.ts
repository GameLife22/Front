import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaimentComponent } from './paiment.component';

describe('PaimentComponent', () => {
  let component: PaimentComponent;
  let fixture: ComponentFixture<PaimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaimentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

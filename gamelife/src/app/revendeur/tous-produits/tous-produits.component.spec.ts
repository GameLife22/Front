import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousProduitsComponent } from './tous-produits.component';

describe('TousProduitsComponent', () => {
  let component: TousProduitsComponent;
  let fixture: ComponentFixture<TousProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TousProduitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TousProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

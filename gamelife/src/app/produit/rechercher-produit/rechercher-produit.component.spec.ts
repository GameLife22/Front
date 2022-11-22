import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherProduitComponent } from './rechercher-produit.component';

describe('RechercherProduitComponent', () => {
  let component: RechercherProduitComponent;
  let fixture: ComponentFixture<RechercherProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercherProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

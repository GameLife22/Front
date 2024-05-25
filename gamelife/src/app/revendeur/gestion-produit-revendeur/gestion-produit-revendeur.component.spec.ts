import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProduitRevendeurComponent } from './gestion-produit-revendeur.component';

describe('GestionProduitRevendeurComponent', () => {
  let component: GestionProduitRevendeurComponent;
  let fixture: ComponentFixture<GestionProduitRevendeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProduitRevendeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionProduitRevendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUtilisateurAdminComponent } from './gestion-utilisateur-admin.component';

describe('GestionUtilisateurAdminComponent', () => {
  let component: GestionUtilisateurAdminComponent;
  let fixture: ComponentFixture<GestionUtilisateurAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionUtilisateurAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionUtilisateurAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

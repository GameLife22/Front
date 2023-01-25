import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationUtilisateurAdminComponent } from './modification-utilisateur-admin.component';

describe('ModificationUtilisateurAdminComponent', () => {
  let component: ModificationUtilisateurAdminComponent;
  let fixture: ComponentFixture<ModificationUtilisateurAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationUtilisateurAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationUtilisateurAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

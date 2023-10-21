import { TestBed } from '@angular/core/testing';

import { GestionUtilisateurAdminService } from './gestion-utilisateur-admin.service';

describe('GestionUtilisateurAdminService', () => {
  let service: GestionUtilisateurAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionUtilisateurAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

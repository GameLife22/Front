import { TestBed } from '@angular/core/testing';

import { MesPRoduitsService } from './mes-produits.service';

describe('MesPRoduitsService', () => {
  let service: MesPRoduitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesPRoduitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MesProduitsService } from './mes-produits.service';

describe('MesProduitsService', () => {
  let service: MesProduitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesProduitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

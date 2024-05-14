import { TestBed } from '@angular/core/testing';

import { TousProduitsService } from './tous-produits.service';

describe('TousProduitsService', () => {
  let service: TousProduitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TousProduitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

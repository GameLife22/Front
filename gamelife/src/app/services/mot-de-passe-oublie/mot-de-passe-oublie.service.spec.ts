import { TestBed } from '@angular/core/testing';

import { MotDePasseOublieService } from './mot-de-passe-oublie.service';

describe('MotDePasseOublieService', () => {
  let service: MotDePasseOublieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotDePasseOublieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

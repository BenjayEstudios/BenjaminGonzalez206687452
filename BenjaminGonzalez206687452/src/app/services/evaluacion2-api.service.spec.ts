import { TestBed } from '@angular/core/testing';

import { Evaluacion2ApiService } from './evaluacion2-api.service';

describe('Evaluacion2ApiService', () => {
  let service: Evaluacion2ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Evaluacion2ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

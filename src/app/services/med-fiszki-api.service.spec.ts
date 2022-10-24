import { TestBed } from '@angular/core/testing';

import { MedFiszkiApiService } from './med-fiszki-api.service';

describe('MedFiszkiApiService', () => {
  let service: MedFiszkiApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedFiszkiApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

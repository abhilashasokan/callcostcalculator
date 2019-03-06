import { TestBed } from '@angular/core/testing';

import { OperatorRatesService } from './operator-rates.service';

describe('OperatorRatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperatorRatesService = TestBed.get(OperatorRatesService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { OperatorRatesService } from './operator-rates.service';

describe('OperatorRatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: OperatorRatesService = TestBed.get(OperatorRatesService);
    expect(service).toBeTruthy();
  });
});

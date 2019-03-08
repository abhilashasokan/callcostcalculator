import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Operator } from '../service/operator.model';

@Injectable({
  providedIn: 'root'
})
export class OperatorRatesService {

  constructor(private httpClient: HttpClient) { }

  getAllOperatorData() {
    return this.httpClient.get<Operator>('assets/data/OperatorRates.json');
  }
}

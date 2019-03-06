import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OperatorRatesService {

  constructor(private httpClient: HttpClient) { }

  getAllOperatorData() {
    return this.httpClient.get<any[]>('assets/data/OperatorRates.json');
  }
}

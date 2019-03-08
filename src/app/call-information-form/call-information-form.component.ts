import { Component, OnInit } from '@angular/core';
import { OperatorRatesService } from './../service/operator-rates.service';
import { Operator } from '../service/operator.model';
import { prepareData } from './call-information-form.service';
import { sortRatesArray } from './call-information-form.service';
import { findBestOperator } from './call-information-form.service';

@Component({
  selector: 'app-call-information-form',
  templateUrl: './call-information-form.component.html',
  styleUrls: ['./call-information-form.component.css']
})
export class CallInformationFormComponent implements OnInit {
  phoneNumber = '';
  parsedRates: Array<any>;
  cheapestOperator: string;
  cheapestOperatorCost: number;
  errorMessage: string;

  constructor(private operatorRatesService: OperatorRatesService) {}

  ngOnInit() {
    this.operatorRatesService
      .getAllOperatorData()
      .subscribe(data => this.parsedRates = prepareData(data), error => error.statusText);
  }

  findBestOperator() {
    const bestOperatorMatch = findBestOperator(this.phoneNumber, this.parsedRates);
    if (bestOperatorMatch.length > 0) {
      this.cheapestOperator = bestOperatorMatch[0].operator;
      this.cheapestOperatorCost = bestOperatorMatch[0].cost;
      this.errorMessage = null;
    } else {
      this.errorMessage = 'No operator found matching your numbers';
      this.cheapestOperator = null;
      this.cheapestOperatorCost = null;
    }
  }
}

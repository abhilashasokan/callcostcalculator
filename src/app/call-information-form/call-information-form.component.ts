import { Component, OnInit } from '@angular/core';
import { OperatorRatesService } from './../service/operator-rates.service';
import { Operator } from '../service/operator.model';

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
      .subscribe(data => this.prepareData(data), error => error.statusText);
  }

  prepareData(operate: Operator) {
    const tempArray = [];
    // tslint:disable-next-line: forin
    for (const operator in operate) {
      // tslint:disable-next-line: forin
      for (const rates in operate[operator]) {
        operate[operator][rates]['operator'] = operator;
        tempArray.push(operate[operator][rates]);
      }
    }
    this.parsedRates = tempArray;
  }

  sortRatesArray(sortArray, props) {
    sortArray.sort((a, b) => {
      if (props === 'cost') {
        return a.cost - b.cost;
      } else if (props === 'number_prefix') {
        return b.number_prefix - a.number_prefix;
      }
    });
  }

  findBestOperator() {
    const bestOperatorMatch = [];
    let foundRange = false;
    for (let num = 0; num < this.phoneNumber.length; num++) {
      const partialPhoneNumber = this.phoneNumber.substr(0, this.phoneNumber.length - num);
      // tslint:disable-next-line: forin
      for (const rate in this.parsedRates) {
        if (this.parsedRates[rate].number_prefix === partialPhoneNumber) {
          bestOperatorMatch.push(this.parsedRates[rate]);
          foundRange = true;
        }
      }
      if (foundRange === true) {
        break;
      }
    }
    this.sortRatesArray(bestOperatorMatch, 'cost');
    if (bestOperatorMatch.length > 0) {
      this.cheapestOperator = bestOperatorMatch[0].operator;
      this.cheapestOperatorCost = bestOperatorMatch[0].cost;
    } else {
      this.errorMessage = 'No operator found matching your telephone numbers';
      this.cheapestOperator = null;
      this.cheapestOperatorCost = null;
    }
  }
}

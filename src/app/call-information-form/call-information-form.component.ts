import { Component, OnInit } from '@angular/core';
import { OperatorRatesService } from './../service/operator-rates.service';

@Component({
  selector: 'app-call-information-form',
  templateUrl: './call-information-form.component.html',
  styleUrls: ['./call-information-form.component.css']
})
export class CallInformationFormComponent implements OnInit {
  OperatorRates: Array<any>;
  phoneNumber: string = '';
  parsedRates: Array<any>;
  dataProcessed: boolean = false;
  cheepestOperator: string;
  cheepestOperatorCost: number;

  constructor(private operatorRatesService: OperatorRatesService) {}

  ngOnInit() {
    this.operatorRatesService
      .getAllOperatorData()
      .subscribe(
        data => (this.OperatorRates = data),
        error => error.statusText
      );
  }

  findBestOperator() {
    if (!this.dataProcessed) {
      this.prepareData();
      this.sortRatesArray(this.parsedRates,'number_prefix');
      this.dataProcessed = true;
    }
    this.findCheepestOption();
  }

  prepareData() {
    const clonedOperatorRate = { ...this.OperatorRates };
    const tempArray = [];
    // tslint:disable-next-line: forin
    for (const operator in clonedOperatorRate) {
      // tslint:disable-next-line: forin
      for (const rates in clonedOperatorRate[operator]) {
        clonedOperatorRate[operator][rates]['operator'] = operator;
        tempArray.push(clonedOperatorRate[operator][rates]);
      }
    }
    this.parsedRates = tempArray;
  }

  sortRatesArray(sortArray, props) {
    // this.parsedRates.sort((a, b) => {
    //   return b.number_prefix - a.number_prefix;
    // });
    sortArray.sort((a, b) => {
      if (props === 'cost') {
        return b.cost - a.cost;
      } else if (props === 'number_prefix') {
        return b.number_prefix - a.number_prefix;
      }
    });
  }

  findCheepestOption() {
    const bestOperatorMatch = [];
    let foundRange = false;
    for (let num = 0; num <= 9; num++) {
      const partialPhoneNumber = this.phoneNumber.substr(0, this.phoneNumber.length - num);
      // tslint:disable-next-line: forin
      for (const rate in this.parsedRates) {
        if (this.parsedRates[rate].number_prefix === partialPhoneNumber) {
          bestOperatorMatch.push(this.parsedRates[rate]);
          foundRange = true;
        }
      }
      if(foundRange === true) {
        break;
      }
    }
    this.sortRatesArray(bestOperatorMatch, 'cost');
    if (bestOperatorMatch.length > 0) {
      this.cheepestOperator = bestOperatorMatch[0].operator;
      this.cheepestOperatorCost = bestOperatorMatch[0].cost;
    }
  }
}

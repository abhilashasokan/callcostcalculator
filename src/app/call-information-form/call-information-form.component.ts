import { Component, OnInit } from '@angular/core';
import { OperatorRatesService } from './../service/operator-rates.service';

@Component({
  selector: 'app-call-information-form',
  templateUrl: './call-information-form.component.html',
  styleUrls: ['./call-information-form.component.css']
})
export class CallInformationFormComponent implements OnInit {
  OperatorRates: Array<any>;
  phoneNumber: string = '4673212345';
  bestOperator: string;
  bestMatch: string;

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
    if (this.phoneNumber) {
// tslint:disable-next-line: forin
      for (const operator in this.OperatorRates) {
        // console.log(operator);
        // console.log(this.OperatorRates[operator]);
        // tslint:disable-next-line: forin
        for (const rates in this.OperatorRates[operator]) {
          // console.log(this.OperatorRates.operator[operator][rates]);
          this.checkOperatorCost(operator, this.OperatorRates[operator][rates]);
        }
      }
    } else {
      console.log('Please enter a valid Telephone numbers');
    }
  }

  checkOperatorCost(operator, OperatorRates) {
    // console.log(OperatorRates);
    // console.log(OperatorRates['number_prefix'], '-' , OperatorRates['cost']);
    // console.log(this.phoneNumber.substr(0, OperatorRates['number_prefix'].length));
    const matchPrefix = this.phoneNumber.substr(0, OperatorRates['number_prefix'].length);
    if (matchPrefix === OperatorRates['number_prefix']) {
      //console.log(matchPrefix);
      if (this.bestOperator) {
        if (matchPrefix.length > this.bestMatch.length) {
          this.bestOperator = operator;
          this.bestMatch = matchPrefix;
        } else if (matchPrefix.length === this.bestMatch.length) {
          // con
        }
        console.log('bestOperator match: ', this.bestMatch);
      } else {
        // console.log('bestOperator: ', this.bestOperator);
        this.bestOperator = operator;
        this.bestMatch = matchPrefix;
      }
    }
  }
}

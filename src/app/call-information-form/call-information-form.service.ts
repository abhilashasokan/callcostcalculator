import { Operator } from '../service/operator.model';

export const prepareData = (operate: Operator) => {
    const tempArray = [];
    // tslint:disable-next-line: forin
    for (const operator in operate) {
      // tslint:disable-next-line: forin
      for (const rates in operate[operator]) {
        tempArray.push({...operate[operator][rates], operator});
      }
    }
    return tempArray;
};

export const sortRatesArray = (sortArray, props) => {
     return sortArray.sort((a, b) => props === 'cost' ? (a.cost - b.cost) : (b.number_prefix - a.number_prefix));
};

export const findBestOperator = (phoneNumber: string, parsedRates) => {
    const bestOperatorMatch = [];
    let foundRange = false;
    for (let num = 0; num < phoneNumber.length; num++) {
      const partialPhoneNumber = phoneNumber.substr(0, phoneNumber.length - num);
      // tslint:disable-next-line: forin
      for (const rate in parsedRates) {
        if (parsedRates[rate].number_prefix === partialPhoneNumber) {
          bestOperatorMatch.push(parsedRates[rate]);
          foundRange = true;
        }
      }
      if (foundRange === true) {
        break;
      }
    }
    return sortRatesArray(bestOperatorMatch, 'cost');
};
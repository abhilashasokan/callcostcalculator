export const prepareData = (operate) => {
    const tempArray = [];
    // tslint:disable-next-line: forin
    for (const operator in operate) {
      // tslint:disable-next-line: forin
      for (const rates in operate[operator]) {
        operate[operator][rates]['operator'] = operator;
        tempArray.push(operate[operator][rates]);
      }
    }
    return tempArray;
};

export const sortRatesArray = (sortArray, props) => {
     sortArray.sort((a, b) => {
      if (props === 'cost') {
        return a.cost - b.cost;
      } else if (props === 'number_prefix') {
        return b.number_prefix - a.number_prefix;
      }
    });
};

export const findBestOperator = (phoneNumber, parsedRates) => {
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
    sortRatesArray(bestOperatorMatch, 'cost');
    return bestOperatorMatch;
};

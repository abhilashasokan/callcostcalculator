import { prepareData } from './call-information-form.service';
import { sortRatesArray } from './call-information-form.service';
import { findBestOperator } from './call-information-form.service';



describe('Call Information Services', () => {
  it('Prepare data and make it ready for subsequent calls', () => {
    const operate = {
      A: [{ number_prefix: '1', cost: 0.9 }],
      B: [{ number_prefix: '1', cost: 0.92 }]
    };
    const result = [
      { number_prefix: '1', cost: 0.9, operator: 'A' },
      { number_prefix: '1', cost: 0.92, operator: 'B' }
    ];
    expect(prepareData(operate)).toEqual(result);
  });
  it('Find Best Operator from preset data', () => {
    const parsedRates = [
      { number_prefix: '1', cost: 0.9, operator: 'A' },
      { number_prefix: '1', cost: 0.92, operator: 'B' }
    ];
    const phoneNumber = '1111111111';
    const result = [
      { number_prefix: '1', cost: 0.9, operator: 'A' },
      { number_prefix: '1', cost: 0.92, operator: 'B' }
    ];
    expect(findBestOperator(phoneNumber, parsedRates)).toEqual(result);
  });

  it('Sort array based on field', () => {
    const sortArray = [
      { number_prefix: '1', cost: 0.9, operator: 'A' },
      { number_prefix: '1', cost: 0.92, operator: 'B' }
    ];
    const props = 'cost';
    const result = [
      { number_prefix: '1', cost: 0.9, operator: 'A' },
      { number_prefix: '1', cost: 0.92, operator: 'B' }
    ];
    expect(sortRatesArray(sortArray, props)).toEqual(result);
  });
});

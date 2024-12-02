import { assert } from 'chai';
import { calculateNumber } from './0-calcul.js';

describe('calculateNumber', function () {
  it('returns the sum of a, b to the nearest whole number', function () {
    assert(calculateNumber(1.5, 3.7) === 6);
  });
});

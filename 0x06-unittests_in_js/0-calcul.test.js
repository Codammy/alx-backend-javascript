/* eslint-disable jest/expect-expect */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('returns the sum of a, b to the nearest whole number', function () {
    let res = calculateNumber(1.5, 3.7);
    assert.strictEqual(res, 6);
    res = calculateNumber(1.5, 1.5);
    assert.strictEqual(res, 4);
    res = calculateNumber(2, 1);
    assert.strictEqual(res, 3);
  });
});

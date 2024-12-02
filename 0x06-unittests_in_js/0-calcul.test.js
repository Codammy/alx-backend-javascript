/* eslint-disable jest/expect-expect */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('rounds the first number', function () {
    assert.strictEqual(calculateNumber(1.2, 0), 1);
    assert.strictEqual(calculateNumber(2.7, 0), 3);
    assert.strictEqual(calculateNumber(3.0, 0), 3);
  });
  it('rounds the second number', function () {
    assert.strictEqual(calculateNumber(0, 1.2), 1);
    assert.strictEqual(calculateNumber(0, 2.7), 3);
    assert.strictEqual(calculateNumber(0, 3.0), 3);
  });
  it('rounds the first number', function () {
    assert.strictEqual(calculateNumber(0, 1.2), 1);
    assert.strictEqual(calculateNumber(0, 2.7), 3);
    assert.strictEqual(calculateNumber(0, 3.0), 3);
  });
});

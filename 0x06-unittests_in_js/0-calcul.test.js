const assert = require('assert');
const calculateNumber = require('./0-calcul')

describe('calculateNumber', () => {
  it('test two rounded numbers', () => {
    assert.equal(calculateNumber(4.5, 5.4), 10);
    assert.equal(calculateNumber(5.5, 4.4), 10);
    assert.equal(calculateNumber(4.0, 5.0), 9);
    assert.equal(calculateNumber(4, 5.4), 9);
  });
  
  it('test floting point', () => {
    assert.strictEqual(calculateNumber(1.799999, 7.911111), 10);
  });
  
})
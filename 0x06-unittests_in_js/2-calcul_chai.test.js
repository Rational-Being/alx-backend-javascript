// let expect = require('chai')
// const { expect } = require('chai');
// // import { expect } from 'chai';
// const calculateNumber = require('./2-calcul_chai');
// // expect = expect.expect;

const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai')

describe('calculateNumber', () => {
  it('test sum of two rounded numbers', () => {
    expect(calculateNumber('SUM', 17.3, 7.3)).to.equal(24);
  });
  
  it('sum two integers', () => {
    expect(calculateNumber('SUM', 2, 3)).to.equal(5);
  });
  
  it('test subtraction of two rounded numbers', () => {
    expect(calculateNumber('SUBTRACT', 7.3, 4.3)).to.equal(3);
  });
  
  it('SUBTRACT TWO INTEGERS', () => {
    expect(calculateNumber('SUBTRACT', 90, 9)).to.equal(81);
  });
  
  it('TEST DIVISION OF Two rounded numbers', () => {
    expect(calculateNumber('DIVIDE', 99.3, 9)).to.equal(11);
  });
  
  it('divide two integers', () => {
    expect(calculateNumber('DIVIDE', 9, 3)).to.equal(3);
  });
  
  it('dividing with zero', () => {
    expect(calculateNumber('DIVIDE', 74, 0)).to.equal('Error');
  });
  
  it('dividing with zero', () => {
    expect(calculateNumber('DIVIDE', 0, 74)).to.equal(0);
  });  
});
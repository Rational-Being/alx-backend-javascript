const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils')
const { it, describe } = require('mocha')

describe('sendPaymentRequestToApi', () => {
  it('thi si the test', () => {
    const hello = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(hello.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(hello.calculateNumber.callCount).to.be.equal(1);
    hello.calculateNumber.restore();

    // expect(hello.calledWith('The toatal is: 10')).to.be.true;
    // expect(hello.callCount).to.beequal(1);
    // he
  });
});
   
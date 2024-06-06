const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils')

describe('sendPaymentRequestToApi', () => {
  it('3 payment test', () => {
    const hello = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    expect(hello.calledWith('SUM', 100, 20)).to.be.true;
    expect(hello.callCount).to.be.equal(1);
    hello.restore();
  });

  it('3 payment test', () => {
    const hello = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);
    expect(hello.calledWith('SUM', 100, 20)).to.be.true;
    hello.restore();
  });

  
});
   
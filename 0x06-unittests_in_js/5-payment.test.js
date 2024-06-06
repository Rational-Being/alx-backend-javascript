const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let hello;

  afterEach(() => {
    expect(hello.calledOnce).to.be.true;
    hello.restore();
  });

  beforeEach(() => {
    hello = sinon.spy(console, 'log');
  });

  it('logs the total is 120 to to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(hello.calledWith('The total is: 20')).to.be.true;
  });

  it('logs the total to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(hello.calledWith('The total is: 10')).to.be.false;
  });

});
   
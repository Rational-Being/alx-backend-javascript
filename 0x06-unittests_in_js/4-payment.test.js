const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils')

describe('sendPaymentRequestToApi', () => {
  it('thi si the test', () => {
    const hello = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    sendPaymentRequestToApi(100, 20);

    expect(hello.calledWith('SUM', 100, 20)).to.be.true;
    expect(hello.callCount).to.be.equal(1);
    hello.restore();


    expect(hello.calledWith('The toatal is: 10')).to.be.true;
    expect(hello.alwaysReturned(10)).to.be.true;
    expect(hello.callCount).to.be.equal(1);
    hello.restore();
  });
  });
   
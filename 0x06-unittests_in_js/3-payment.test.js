const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils')

describe('sendPaymentRequestToApi', () => {
    it('thi si the test', () => {
        const hello = sinon.spy(Utils);

        sendPaymentRequestToApi(81, 9);
        expect(hello.calculateNumber.calledWith('SUM', 81, 9)).to.be.true;
        expect(hello.calculateNumber.callCount).to.be.equal(1);
        hello.calculateNumber.restore();
    });
    });
   
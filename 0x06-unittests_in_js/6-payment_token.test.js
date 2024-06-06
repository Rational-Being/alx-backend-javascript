const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');


describe ('getPaymentTokenFromAPI test', () => {
  it('return response where success == true', (done) => {
    getPaymentTokenFromAPI(true).then((response) => {
      // expect(response).to.deep.equal('data');
      expect(response).to.have.property('data')
      done();
    }).catch((err) => done(err));
  });
});
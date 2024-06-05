const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');


describe ('getPaymentTokenFromAPI Function test', () => {
    it('return response where success == true', (done) => {
        getPaymentTokenFromAPI(true)
        .then((response) => {
            expect(response).to.deep.equal({data: "Successful responseponse from the API"});
            done();
        });
    });
});
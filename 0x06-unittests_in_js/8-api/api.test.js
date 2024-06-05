const request = require('request');
const { expect } = require('chai');

describe('API GET testing', () => {
    const allowed = {
        API_url: "http://localhost:7865",
        method: 'GET'
    };

    it('tests for correct response', (done) => {
        request(allowed, (_, res, body) => {
            expect(res.statusCode).to.be.below(400);
            expect(body).to.equal("Welcome to the payment system");
            done();
        });
    });
});
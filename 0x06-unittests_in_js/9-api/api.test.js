const request = require('request');
const { expect } = require('chai');

describe('API GET testing', () => {
    
    it('tests for correct response', (done) => {
        const allowed = {
            API_url: "http://localhost:7865",
            method: 'GET'
        };
        request(allowed, (_, res, body) => {
            expect(res.statusCode).to.be.below(400);
            expect(body).to.equal("Welcome to the payment system");
            done();
        });
    });

    it('tests for path /cart/id', (done) => {
        const allowed = {
            API_url: "http://localhost:7865/cart/3",
            method: 'GET'
        };
        request(allowed, (_, res, body) => {
            expect(res.statusCode).to.be.below(400);
            expect(body).to.equal("Payment methods for cart 3");
            done();
        });
    });

    it('tests for path /cart/hello', (done) => {
        const allowed = {
            API_url: "http://localhost:7865/cart/hello",
            method: 'GET'
        };
        request(allowed, (_, res, body) => {
            expect(res.statusCode).to.be.below(200);
            done();
        });
    });
});
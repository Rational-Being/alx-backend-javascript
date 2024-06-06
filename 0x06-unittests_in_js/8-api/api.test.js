const request = require('request');
const { expect } = require('chai');

describe('API GET testing', () => {
   

    it('tests for correct response', (done) => {
        // const allowed = {
        //     _url: "http://localhost:7865/",
        //     method: 'GET'
        // };
        // request(allowed, (err, res, body) => {
            request.get("http://localhost:7865/", (_, res, body) => {
            expect(res.statusCode).to.be.below(400);
            expect(body).to.be.equal("Welcome to the payment system");
            done();
        });
    });
});
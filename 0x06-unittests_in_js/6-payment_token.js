const { get } = require("http");

async function getPaymentTokenFromAPI (sucess) {
    if (success) {
        return await Promise.resolve({ data: 'Successfull response form the API' });
    }
}

module.exports = getPaymentTokenFromAPI;
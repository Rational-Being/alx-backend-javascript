const { get } = require("http");

async function getPaymentTokenFromAPI (success) {
  if (success) {
    return await Promise.resolve({ data: 'Successfull response form the API' });
  };
};

module.exports = getPaymentTokenFromAPI;
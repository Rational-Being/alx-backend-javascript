const express = require('express');

const app = express();
const port = 7865;

app.get('/', (_, res) => {
    res.send("Welcome to the payment system");
});

app.get('/cart/:id(\\d+)', (req, res) => {
    console.log(req.params.id);
    res.send(`Payment methods for cart ${req.params.id}`)
});

app.get('/available_payments', (_, res) => {
    const payment = {
        options: {
            credit_cards: true,
            paypal: false  
        }
    }
    res.send(payment)
});

app.post('login', (req, res) => {
    let user = "";

    if (req.body) {
        user = req.body.user;
    }

    res.send(`Welcome ${user}`);
})

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;

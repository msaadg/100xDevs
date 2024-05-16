const express = require('express');
const cors = require('cors'); // Import the cors module
const app = express();
const port = 3000;

app.use(cors()); // Use the cors module

app.get('/sum', (req, res) => {
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    let sum = a + b;
    res.send(`Sum of ${a} and ${b} is ${sum}`);
});

app.get('/interest', (req, res) => {
    let principal = parseInt(req.query.principal);
    let rate = parseInt(req.query.rate);
    let time = parseInt(req.query.time);
    let interest = (principal * rate * time) / 100;
    res.send(`Interest on ${principal} for ${time} years at ${rate}% is ${interest}`);
});

app.listen(port);
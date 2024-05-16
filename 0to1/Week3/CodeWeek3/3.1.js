////////////////////////////////////////////////// Dumb way //////////////////////////////////////////////////
// const express = require('express');

// const app = express();

// app.get('/health-checkup', function(req, res) {
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyID = req.query.kidneyID;

//     if (username != 'admin' || password != 'pass') {
//         res.status(400).json({
//             msg: "User does not exist"
//         });
//         return;
//     }

//     if (kidneyID != 1 && kidneyID != 2) {
//         res.status(400).json({
//             msg: "Wrong inputs"
//         });
//         return;
//     }

//     res.status(200).json({
//         msg: "Your kidney is fine"
//     });
// });

// app.listen(3000);


////////////////////////////////////////// Smart way using middlewares /////////////////////////////////////////////
// const express = require('express');

// const app = express();

// const checkUser = function(req, res, next) {
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (username != 'admin' || password != 'pass') {
//         res.status(400).json({
//             msg: "User does not exist"
//         });
//         return;
//     }

//     next();
// }

// function checkKidneyID(req, res, next) {
//     const kidneyID = req.query.kidneyID;

//     if (kidneyID != 1 && kidneyID != 2) {
//         res.status(400).json({
//             msg: "Wrong inputs"
//         });
//         return;
//     }

//     next();
// }

// app.get('/health-checkup', checkUser, checkKidneyID, function(req, res) {
//     res.status(200).json({
//         msg: "Your kidney is fine"
//     });
// });

// app.listen(3000);


////////////////////////////////////////////////// Global catches //////////////////////////////////////////////////
// const express = require('express');

// const app = express();

// app.use(express.json());

// app.post('/health-checkup', function(req, res) {
//     const kidneys = req.body.kidneys;
//     const kidneyLength = kidneys.length;

//     res.send("Your kidney length is " + kidneyLength);
// });

// app.use(function(err, req, res, next) {
//     res.status(400).json({
//         msg: "Something went wrong"
//     });
// });

// app.listen(3000);


////////////////////////////////////////////////// Zod //////////////////////////////////////////////////
const express = require('express');

const zod = require('zod');

const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

app.post('/health-checkup', function(req, res) {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);

    if (!response.success) {
        res.status(411).json({
            msg: "Wrong inputs"
        });
        return;
    }

    res.send({
        response
    });
});

app.listen(3000);

///////////////////////////////////// How to declare schemas: an example ////////////////////////////////////////////
//  {
//  email: string = email
//  password: atleast 8 letters 
//  country: "IN", "US"
//  kidneys: [1, 2, 3, 4, 5]    
//  }

// const schema = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(8),
//     country: zod.literal("IN").or(zod.literal("US")),
//     kidneys: zod.array(zod.number())
// });